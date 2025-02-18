import { FilterRequestSchema } from "@/apis/common"
import { create } from "zustand"

interface FilterForTenantState {
  filter: FilterRequestSchema
  update: (Filter: FilterRequestSchema) => void
  reset: () => void
}

export const useFilterForTenantStore = create<FilterForTenantState>((set) => ({
  filter: {
    name: "",
    query: [],
    limit: 10,
    page: 0,
    sort: [],
  },
  update: (filter) => {
    set({ filter: filter })
  },
  reset: () => {
    set({
      filter: {
        name: "",
        query: [],
        limit: 10,
        page: 0,
        sort: [],
      },
    })
  },
}))
