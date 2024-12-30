import { Toaster } from "@/components/ui/sonner"
import { cacheErrorHandler } from "@/lib/error-handling"
import "@/styles/globals.css"
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import type { AppProps } from "next/app"
import localFont from "next/font/local"

const inter = localFont({
  src: "../public/font/Inter-VariableFont_slnt,wght.ttf",
})

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
