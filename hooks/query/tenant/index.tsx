import { queryOptions } from "@tanstack/react-query"
import { useGetAccessToken } from "../auth"
import axiosClient from "@/apis/axios-client"
import { z } from "zod"
import { PaginationResponseSchema } from "@/apis/common"

export const tenantQueries = {
  all: () => ["tenant"],
  listAll: (accessToken: string) =>
    queryOptions({
      queryKey: [...tenantQueries.all(), "listAll"],
      queryFn: () => listAllTenantAPI(accessToken),
    }),
  // listFilter: (filters: string) =>
  //   queryOptions({
  //     queryKey: [...tenantQueries.listAll().queryKey, filters],
  //     queryFn: () => fetchTodos(filters),
  //   }),
  // detailByID: (id: number) =>
  //   queryOptions({
  //     queryKey: [...tenantQueries.all(), "detailByID", id],
  //     queryFn: () => fetchTodo(id),
  //   }),
}

// 👀 API Response
const allTeanantSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  address: z.string(),
  phone: z.string(),
  email: z.string(),
  is_active: z.boolean(),
  created_time: z.string(),
})

const listAllTenantAPI = async (accessToken: string) => {
  const url = "/tenant"
  const config = {
    headers: {
      token: accessToken,
      "Access-Control-Allow-Origin": "*",
    },
  }
  const response = await axiosClient.get(url, config)
  return PaginationResponseSchema(allTeanantSchema).parse(response)
}
