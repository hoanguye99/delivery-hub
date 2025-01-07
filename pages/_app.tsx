import { PublicAuth } from "@/components/auth/page-auth"
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
import { NextPage } from "next"
import type { AppProps } from "next/app"
import localFont from "next/font/local"
import { ReactElement, ReactNode, useEffect } from "react"
import NonSSRWrapper from "@/components/common/no-ssr-wrapper"
import AuthProvider from "@/components/auth/auth-provider"
import Layout from "@/components/layout/main"
import { SidebarTrigger } from "@/components/ui/sidebar"

const inter = localFont({
  src: "../public/font/Inter-VariableFont_slnt,wght.ttf",
})

interface LayoutProps {
  children: ReactNode
  className?: string
  title?: string
  nonePadding?: boolean
}

export interface AuthProps {
  children: ReactNode
  className?: string
}

export type NextPageWithAuthLayout = NextPage & {
  // Layout?: (props: LayoutProps) => ReactElement
  Auth?: React.ComponentType<AuthProps>
}

type AppPropsWithAuthLayout = AppProps & {
  Component: NextPageWithAuthLayout
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

export default function App({ Component, pageProps }: AppPropsWithAuthLayout) {
  const Auth = Component.Auth ?? PublicAuth
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <NonSSRWrapper>
          {Auth === PublicAuth ? (
            <main>
              <Component {...pageProps} />
            </main>
          ) : (
            <AuthProvider>
              <Auth>
                <Layout>
                  <main>
                    <SidebarTrigger />
                    <Component {...pageProps} />
                  </main>
                </Layout>
              </Auth>
            </AuthProvider>
          )}
        </NonSSRWrapper>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}
