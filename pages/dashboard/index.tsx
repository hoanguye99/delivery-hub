import React from "react"
import { NextPageWithAuthLayout } from "../_app"
import { TenantPageAuth } from "@/components/auth/page-auth"

const DashboardPage: NextPageWithAuthLayout = () => {
  return <div>DashboardPage</div>
}
DashboardPage.Auth = TenantPageAuth

export default DashboardPage
