import { useInitialPageAccessToken } from "@/hooks/query/auth"
import logo from "@/public/images/J&T Express Logo.png"
import { Slot } from "@radix-ui/react-slot"
import Image from "next/image"
import React from "react"

export const AccessTokenContext = React.createContext<string | null>(null)

interface AuthProviderProps {
  asChild: boolean
  children: React.ReactNode
}

const AuthProvider = (props: AuthProviderProps) => {
  const Comp = props.asChild ? Slot : AuthProviderInternal
  return <Comp {...props} />
}

const AuthProviderInternal = (props: { children: React.ReactNode }) => {
  const getPageAccessToken = useInitialPageAccessToken()
  if (getPageAccessToken.data === undefined) {
    // Page screen loader
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Image
          src={logo}
          alt="Website logo"
          width={300}
          className="animate-bounce-slow"
        ></Image>
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
