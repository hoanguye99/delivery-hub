import axiosClient from "@/apis/axios-client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useRouter } from "next/router"
import { useCallback } from "react"
import { toast } from "sonner"

export const useLogoutNavigate = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  // const mutation = useLogoutMutation()
  const logoutNavigate = useCallback(async (token?: string) => {
    // if (token) mutation.mutateAsync(token)
    if (typeof window !== "undefined")
      localStorage.removeItem("next-delivery-userInfo")
    toast.dismiss()
    queryClient.clear()
    router.push("/login", undefined, {
      shallow: true,
      unstable_skipClientCache: true,
    })
  }, [])

  return logoutNavigate
}

const useLogoutMutation = () => {
  const logoutAPI = (accessToken: string) => {
    const url = "/auth/logout/"
    return axiosClient.post(url, {}, { headers: { token: accessToken } })
  }

  return useMutation<any, AxiosError, string, any>({
    mutationFn: (accessToken) => logoutAPI(accessToken),
  })
}
