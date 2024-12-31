import { useInitialPageAccessToken } from "@/hooks/query/auth"
import { useLogoutNavigate } from "@/hooks/useLogout"
import React from "react"

export const AccessTokenContext = React.createContext<string | null>(null)

interface AuthProviderProps {
  isPublic: boolean
  children: React.ReactNode
}

const AuthProvider = (props: AuthProviderProps) => {
  if (props.isPublic) return <>{props.children}</>
  return <AuthProviderInternal>{props.children}</AuthProviderInternal>
}

const AuthProviderInternal = (props: { children: React.ReactNode }) => {
  const getPageAccessToken = useInitialPageAccessToken()
  const logoutNavigate = useLogoutNavigate()

  if (getPageAccessToken.data === undefined) {
    return (
      <div className="opacity-5">
        Access Token appears to be undefined. It could be that it can't get
        access token from local storage when the app first load. What else?
      </div>
    )
  }

  return (
    // <UserDetailContext.Provider value={getPageUserDetail.data}>
    <AccessTokenContext.Provider
      value={getPageAccessToken.data.access_token.token}
    >
      {props.children}
    </AccessTokenContext.Provider>
    // </UserDetailContext.Provider>
  )
}

export default AuthProvider
