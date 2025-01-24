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
