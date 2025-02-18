import { z } from "zod"

export interface ErrorResponse {
  code: string
  description: string
}

export const PaginationResponseSchema = <T extends z.ZodTypeAny>(
  dataSchema: T
) =>
  z.object({
    page: z.number(),
    total: z.number(),
    total_page: z.number(),
    data: z.array(dataSchema),
  })

export const FilterRequestSchema = z.object({
  name: z.string(),
  limit: z.number(),
  page: z.number(),
  query: z.array(
    z.object({
      name: z.string(),
      value: z.union([
        z.string(),
        z.boolean(),
        z.array(z.string()),
        z.undefined(),
      ]),
      type: z.enum(["like", "eq", "eqID"]),
    })
  ),
  sort: z.array(
    z.object({
      name: z.string(),
      type: z.boolean(),
    })
  ),
})

export type FilterRequestSchema = z.infer<typeof FilterRequestSchema>
