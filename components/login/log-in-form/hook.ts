import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { AxiosError } from "axios"
import axiosClient from "@/apis/axios-client"
import { toast } from "sonner"

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password cannot be empty" }),
})

// 👀 API Response
export const UserDetailSchema = z.object({
  id: z.string(),
  fullname: z.string(),
  email: z.string(),
  role: z.string(),
  access_token: z.object({
    token: z.string(),
    expireAt: z.number(),
  }),
  refresh_token: z.object({
    token: z.string(),
    expireAt: z.number(),
  }),
})

export type UserDetail = z.infer<typeof UserDetailSchema>

const loginAPI = async (data: z.infer<typeof loginFormSchema>) => {
  const url = "/auth/login/"
  const response = await axiosClient.post(url, data)
  return UserDetailSchema.parse(response)
}

export const useLoginForm = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const mutation = useMutation<
    UserDetail,
    AxiosError,
    z.infer<typeof loginFormSchema>
  >({
    mutationFn: (formData) => loginAPI(formData),
    onSuccess: (data, variables, context) => {
      console.log("success")
      console.log(data)
    },
    // onError: (error) => {
    //   console.error(error)
    // },
  })

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    // ✅ This will be type-safe and validated.
    mutation.mutate(values)
  }

  return { form, onSubmit }
}
