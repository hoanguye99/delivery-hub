import { ErrorResponse } from "@/apis/common"
import axios, { AxiosError } from "axios"
import { toast } from "sonner"
import { ZodError } from "zod"

export const cacheErrorHandler = (error: unknown) => {
  // 🎉 only show error toasts if we already have data in the cache
  // which indicates a failed background update
  if (isZodError(error)) {
    toast.error("Type mismatch from backend!!! Dev please check console!")
    console.error("Zod Validation Error:", error.issues)
  } else if (isAxiosError(error)) {
    if (
      (error as AxiosError<ErrorResponse>).response?.data?.code !==
        "TOKEN_EXPIRED" &&
      (error as AxiosError<ErrorResponse>).response?.data?.code !== "NOT_FOUND"
    ) {
      toast.error(
        (error as AxiosError<ErrorResponse>).response?.data?.description ??
          (error as AxiosError).message
      )
    }

    // User shut down computer and web can't run the refresh token logic
    if (
      (error as AxiosError).response?.status === 401 &&
      (error as AxiosError<ErrorResponse>).response?.data?.code ===
        "TOKEN_EXPIRED"
    ) {
      window.location.reload()
    }

    // Token or permission has been updated in the backend side
    if (
      (error as AxiosError).response?.status === 401 &&
      (error as AxiosError<ErrorResponse>).response?.data?.code ===
        "INVALID_TOKEN"
    ) {
      localStorage.removeItem("next-delivery-userInfo")
      window.location.href = "/login"
      // window.location.reload()
    }
  } else {
    toast.error(
      "Unknown error type other than ZodError and AxiosError. Dev please check console!"
    )
    console.error("Unknown Error:", error)
  }
}

// Type guard for AxiosError
export function isAxiosError(error: unknown) {
  return axios.isAxiosError(error)
}

// Type guard for ZodError
export function isZodError(error: unknown) {
  return error instanceof ZodError
}
