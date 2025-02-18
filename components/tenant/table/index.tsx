import { Pagination } from "@/components/ui/pagination/pagination"
import { TableView } from "@/components/ui/table"
import {
  ColumnFiltersState,
  SortingState,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import produce from "immer"
import { PaginationResponseSchema } from "@/apis/common"
import { useFilterForTenantStore } from "@/hooks/zustand/filter-for-tenant"
import dayjs from "dayjs"
import { Button } from "@/components/ui/button"
import { allTenantSchema, TenantDetailSchema } from "@/hooks/query/tenant"
import { z } from "zod"

interface TenantsProps {
  getAllTenantsData: z.infer<
    ReturnType<typeof PaginationResponseSchema<typeof allTenantSchema>>
  >
}

const TenantsTable = (props: TenantsProps, ref: any) => {
  const filterTenant = useFilterForTenantStore()
  const [data, setData] = useState(() => [...props.getAllTenantsData.data])
  const [sorting, setSorting] = useState<SortingState>([
    ...filterTenant.filter.sort.map((val: any) => ({
      id: val.name,
      desc: val.type,
    })),
  ])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
//   useEffect(() => {
//     filterTenant.update(
//       produce(filterTenant.filter, (draftState: any) => {
//         draftState.sort = [
//           ...sorting.map((val: any) => ({
//             name: val.id,
//             type: val.desc,
//           })),
//         ]
//       })
//     )
//   }, [sorting])

  useEffect(() => {
    setData([...props.getAllTenantsData.data])
  }, [props.getAllTenantsData])

  const columnHelper = createColumnHelper<TenantDetailSchema>()

  const columns = [
    columnHelper.display({
      id: "number",
      header: () => "STT",
      cell: (info) => (
        <div>
          {filterTenant.filter.page * filterTenant.filter.limit +
            1 +
            info.row.index}
        </div>
      ),
      enableColumnFilter: true,
      meta: "w-stt",
    }),
    columnHelper.accessor("name", {
      header: "Tên tenant",
      enableColumnFilter: true,
      meta: "w-name",
    }),
    columnHelper.accessor("email", {
      header: "Email",
      enableColumnFilter: true,
      meta: "w-name",
    }),
    columnHelper.accessor("description", {
      header: "Mô tả",
      enableColumnFilter: true,
      meta: "w-description",
    }),
    columnHelper.accessor("address", {
      header: "Địa chỉ",
      enableColumnFilter: true,
      meta: "w-description",
    }),
    columnHelper.accessor("phone", {
      header: "Số điện thoại",
      enableColumnFilter: true,
      meta: "w-description",
    }),
    columnHelper.accessor("created_time", {
      header: "Ngày tạo",
      cell: (info) => {
        return <p>{dayjs(info.getValue()).format("DD/MM/YYYY HH:mm")}</p>
      },
      enableColumnFilter: true,
      meta: "w-create_time",
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    sortDescFirst: false,
    pageCount: 0,
    debugTable: true,
  })

  return (
    <>
      <TableView table={table} className="h-table-regular" />
      <div className="flex gap-2 py-4 border-t border-border-2 justify-end">
        <Pagination
          changePage={(e) => {
            filterTenant.update(
              produce(filterTenant.filter, (draftState: any) => {
                draftState.page = e - 1
              })
            )
          }}
          pageCurrent={props.getAllTenantsData.page + 1}
          totalPage={props.getAllTenantsData.total_page}
          label={
            props.getAllTenantsData.total > 0 ? (
              <div className="hidden md:block">
                {props.getAllTenantsData.page * filterTenant.filter.limit + 1}-
                {props.getAllTenantsData.page * filterTenant.filter.limit +
                  data.length}{" "}
                trên tổng {props.getAllTenantsData.total}
              </div>
            ) : (
              <></>
            )
          }
          showGotoPageInput
        ></Pagination>
      </div>
    </>
  )
}

export default TenantsTable
