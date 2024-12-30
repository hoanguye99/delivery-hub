import { ErrorResponse } from "@/apis/common"
import { Toaster } from "@/components/ui/sonner"
import "@/styles/globals.css"
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { AxiosError } from "axios"
import type { AppProps } from "next/app"
import localFont from "next/font/local"
import { toast } from "sonner"

const inter = localFont({
  src: "../public/font/Inter-VariableFont_slnt,wght.ttf",
})

const cacheErrorHandler = (error: unknown) => {
  // 🎉 only show error toasts if we already have data in the cache
  // which indicates a failed background update
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
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: cacheErrorHandler,
  }),
  mutationCache: new MutationCache({
    onError: cacheErrorHandler,
  }),
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
