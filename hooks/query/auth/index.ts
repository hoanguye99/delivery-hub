import axiosClient from "@/apis/axios-client"
import { AccessTokenContext } from "@/components/auth/auth-provider"
import {
  UserDetail,
  UserDetailSchema,
} from "@/components/login/log-in-form/hook"
import { AccessTokenDecoded } from "@/hooks/useLoginSuccess"
import { useLogoutNavigate } from "@/hooks/useLogout"
import { useQuery } from "@tanstack/react-query"
import { jwtDecode } from "jwt-decode"
import React from "react"
import { toast } from "sonner"

export const authKeys = {
  getAccessToken: () => ["getAccessToken"] as const,
}

const refreshTokenAPI = async (refreshToken: string) => {
  const config = {
    headers: { "refresh-token": refreshToken },
  }
  const url = "/auth/refresh-token/"
  const response = await axiosClient.post(url, {}, config)
  return UserDetailSchema.parse(response)
}

export function useInitialPageAccessToken() {
  const logoutNavigate = useLogoutNavigate()
  return useQuery({
    queryKey: authKeys.getAccessToken(),
    queryFn: async () => {
      if (!localStorage.getItem("next-delivery-userInfo")) {
        logoutNavigate()
        return undefined
      }
      // if it's not time for refreshing => get data on localstorage
      if (
        Number(localStorage.getItem("next-delivery-nextTimeRefresh")) -
          Date.now() -
          5000 >
        0
      ) {
        return JSON.parse(
          localStorage.getItem("next-delivery-userInfo")!
        ) as UserDetail as unknown as Promise<UserDetail>
      }
      try {
        const data = await refreshTokenAPI(
          (
            JSON.parse(
              localStorage.getItem("next-delivery-userInfo")!
            ) as UserDetail
          ).refresh_token.token
        )
        localStorage.setItem("next-delivery-userInfo", JSON.stringify(data))
        const decoded = jwtDecode<AccessTokenDecoded>(data.access_token.token)
        localStorage.setItem(
          "next-delivery-nextTimeRefresh",
          (decoded.exp * 1000).toString()
        )
        return data
      } catch (error) {
        // Whenever refreshToken API returns an error, log out immediately
        toast.error("Failed when calling Refresh Token API")
        console.error("Failed when calling Refresh Token API")
        logoutNavigate()
        return undefined
      }
    },

    // bc of active refetch, make this query fresh so it does not auto refetch
    // staleTime: localStorage.getItem('next-delivery-nextTimeRefresh')
    //   ? Number(localStorage.getItem('next-delivery-nextTimeRefresh')) -
    //     Date.now() -
    //     5000
    //   : 50 * 60 * 1000,
    staleTime: Infinity,
    // onSuccess: (data) => {
    //   toast.success('Refresh data')
    // },
    // onSuccess: (data) => console.log(data),
    // enable to make sure that local storage have data when refetch
    // enabled:
    //   typeof window !== "undefined" &&
    //   localStorage.getItem("next-delivery-userInfo") !== null,
    // refetch every 50 minutes
    // refetchInterval: 10 * 60 * 1000,
    refetchInterval: (query) => {
      if (
        query.state.data !== undefined &&
        query.state.data.access_token.token !== ""
      ) {
        const decoded = jwtDecode<AccessTokenDecoded>(
          query.state.data.access_token.token
        )
        const remainingTime = decoded.exp * 1000 - Date.now() - 5000
        return remainingTime
      }
      return false
    },
    refetchIntervalInBackground: true,
    retry: false,
    // Always take UserDetail data from Local Storage
  })
}

export function useGetAccessToken() {
  const accessToken = React.useContext(AccessTokenContext)
  if (!accessToken) {
    throw new Error("AccessTokenContext: No value provided")
  }
  return accessToken
}

export function getUserDetail() {
  if (localStorage.getItem("next-delivery-userInfo")) {
    return JSON.parse(
      localStorage.getItem("next-delivery-userInfo")!
    ) as UserDetail
  } else {
    throw new Error(
      "User Detail from Local Storage not found! Are you sure to have fetched UserDetail from an authenticated page?"
    )
  }
}
