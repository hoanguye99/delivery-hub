import React from "react"
import { NextPageWithAuthLayout } from "../_app"
import { TenantPageAuth } from "@/components/auth/page-auth"

const TenantPage: NextPageWithAuthLayout = () => {
  return (
    <div>
      <p className="text-typography-placeholder">Bye bye</p>
    </div>
  )
}
TenantPage.Auth = TenantPageAuth

export default TenantPage
