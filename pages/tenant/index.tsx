import React from "react"
import { NextPageWithAuthLayout } from "../_app"
import { TenantPageAuth } from "@/components/auth/page-auth"

const TenantPage: NextPageWithAuthLayout = () => {
  return <div>TenantPage</div>
}
TenantPage.Auth = TenantPageAuth

export default TenantPage
