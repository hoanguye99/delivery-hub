import React from "react"
import { NextPageWithAuthLayout } from "../_app"
import { TenantPageAuth } from "@/components/auth/page-auth"
import TenantList from "@/components/tenant"

const TenantPage: NextPageWithAuthLayout = () => {
  return <TenantList />
}
TenantPage.Auth = TenantPageAuth

export default TenantPage
