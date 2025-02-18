import axiosClient from "@/apis/axios-client"
import { ErrorResponse } from "@/apis/common"
import { useGetAccessToken } from "@/hooks/query/auth"
import {
  allTenantSchema,
  TenantDetailSchema,
  tenantQueries,
} from "@/hooks/query/tenant"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { z } from "zod"

export const tenantFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  address: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

const createTenantAPI = async (
  data: z.infer<typeof tenantFormSchema>,
  accessToken: string
) => {
  const url = "/tenant/"
  const config = {
    headers: {
      token: accessToken,
      "Access-Control-Allow-Origin": "*",
    },
  }
  const response = await axiosClient.post(url, data, config)
  return allTenantSchema.parse(response)
}

export const useCreateTenant = (accessToken: string, close: () => void) => {
  const queryClient = useQueryClient()
  const form = useForm<z.infer<typeof tenantFormSchema>>({
    resolver: zodResolver(tenantFormSchema),
  })

  const mutation = useMutation<
    TenantDetailSchema,
    AxiosError,
    z.infer<typeof tenantFormSchema>
  >({
    mutationFn: (formData) => createTenantAPI(formData, accessToken),
    onMutate: () => {
      toast.loading("Đang tạo tenant...")
    },
    onSuccess: (data, variables, context) => {
      toast.dismiss()
      toast.success("Tạo thành công tenant")
      queryClient.invalidateQueries({
        queryKey: tenantQueries.listAll(accessToken).queryKey,
      })
      form.reset()
      close()
    },
    onError: (error) => {
      toast.dismiss()
      toast.error(
        (error as AxiosError<ErrorResponse>).response?.data.description
      )
    },
  })

  function onSubmit(values: z.infer<typeof tenantFormSchema>) {
    mutation.mutate(values)
  }

  return { form, onSubmit, mutation }
}
