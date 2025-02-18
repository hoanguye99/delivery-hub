import { tenantQueries } from "@/hooks/query/tenant"
import { useQuery } from "@tanstack/react-query"
import React, { useState } from "react"
import PageError from "../page-error/error"
import { useGetAccessToken } from "@/hooks/query/auth"
import { TableSkeleton } from "../ui/skeleton"
import TenantsTable from "./table"
import { Button } from "../ui/button"
import CreateTenantModal from "./tenant-form/create-modal"

const TenantList = () => {
  const accessToken = useGetAccessToken()
  const allTenantQuery = useQuery(tenantQueries.listAll(accessToken))
  const [isShowModalCreate, setIsShowModalCreate] = useState(false)

  return (
    <>
      <div className="flex items-center py-4">
        <div className="flex gap-5 grow items-center">
          <div className="flex gap-5 grow items-center"></div>
          <div className="flex gap-2 py-1">
            <Button
              onClick={() => {
                setIsShowModalCreate(true)
              }}
              className="hidden md:flex gap-2 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span>Tạo mới</span>
            </Button>
          </div>
        </div>
      </div>
      {allTenantQuery.status === "error" && <PageError />}
      {allTenantQuery.status == "pending" && (
        <>
          <TableSkeleton />
        </>
      )}
      {allTenantQuery.status == "success" && (
        <TenantsTable getAllTenantsData={allTenantQuery.data} />
      )}
      <CreateTenantModal
        isOpen={isShowModalCreate}
        closeModal={() => setIsShowModalCreate(false)}
      />
    </>
  )
}

export default TenantList
