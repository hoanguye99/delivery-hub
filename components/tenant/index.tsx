import { tenantQueries } from "@/hooks/query/tenant"
import { useQuery } from "@tanstack/react-query"
import React from "react"
import PageError from "../page-error/error"
import { useGetAccessToken } from "@/hooks/query/auth"
import { TableSkeleton } from "../ui/skeleton"

const TenantList = () => {
  const accessToken = useGetAccessToken()
  const allTenantQuery = useQuery(tenantQueries.listAll(accessToken))
  return (
    <>
      {/* {allTenantQuery.status === "error" && <PageError />}
      {allTenantQuery.status == "pending" && (
        <>
          <TableSkeleton />
        </>
      )}
      {allTenantQuery.status == "success" && (
        <TenantsTable
          getAllTenantsData={allTenants.data}
          setTenantsChoosse={setTenantChoose}
        />
      )} */}
      <TableSkeleton />
    </>
  )
}

export default TenantList
