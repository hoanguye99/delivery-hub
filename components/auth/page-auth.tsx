import { getUserDetail } from "@/hooks/query/auth"
import { AuthProps } from "@/pages/_app"
import { useRouter } from "next/router"
import { useEffect } from "react"

export function PublicAuth({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

interface GenericPageAuthProps extends AuthProps {
  condition: boolean
}

function GenericPageAuth({ children, condition }: GenericPageAuthProps) {
  const router = useRouter()
  useEffect(() => {
    if (!condition) {
      router.replace("/401", router.asPath)
    }
  }, [router])

  if (condition) {
    return <>{children}</>
  }

  return <></>
}

export function TenantPageAuth(props: AuthProps) {
  const userDetail = getUserDetail()
  return <GenericPageAuth {...props} condition={userDetail.role === "SA"} />
}
