import Head from "next/head"
import Link from "next/link"
import {
  EmptyView,
  EmptyViewDescription,
  EmptyViewTitle,
} from "../ui/empty-view"
import { ErrorIcon } from "../ui/icon"
import { Button } from "../ui/button"

const UnauthorizedPage = () => {
  return (
    <>
      <Head>
        <title>Không thể truy cập</title>
      </Head>
      <div className="h-screen">
        <EmptyView textSize="extra" variant="transparent-background">
          <ErrorIcon className="w-full max-w-[450px] h-[378px] -mb-12 -mt-40" />
          <EmptyViewTitle>401 ERROR!</EmptyViewTitle>
          <EmptyViewDescription>
            Không có quyền truy cập vào trang này!
          </EmptyViewDescription>
          <Button size="lg" asChild>
            <Link href="/" className="mt-8">
              Quay về trang chủ
            </Link>
          </Button>
        </EmptyView>
      </div>
    </>
  )
}

export default UnauthorizedPage
