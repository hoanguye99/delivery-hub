import { UserDetail } from "@/components/login/log-in-form/hook"
import { useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useCallback } from "react"
import { jwtDecode } from "jwt-decode"
import { authKeys } from "./query/auth"

export interface AccessTokenDecoded {
  email: string
  exp: number
  iat: number
  id: string
  role: string
  type: string
}

export const useLoginSuccess = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const onLoginSuccess = useCallback((data: UserDetail) => {
    queryClient.clear()

    if (typeof window !== "undefined") {
      localStorage.setItem("next-delivery-userInfo", JSON.stringify(data))
      const decoded = jwtDecode<AccessTokenDecoded>(data.access_token.token)
      localStorage.setItem(
        "next-delivery-nextTimeRefresh",
        (decoded.exp * 1000).toString()
      )
    }
    queryClient.setQueryData(authKeys.getAccessToken(), data)
    router.push("/tenant")
  }, [])

  return onLoginSuccess
}
