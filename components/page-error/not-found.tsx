import Link from "next/link"
import React from "react"
import {
  EmptyView,
  EmptyViewDescription,
  EmptyViewTitle,
} from "../ui/empty-view"
import { Button } from "../ui/button"
import { ErrorIcon } from "../ui/icon"

const NotFoundPage = () => {
  return (
    <div className="h-screen">
      <EmptyView textSize="extra" variant="transparent-background">
        <ErrorIcon className="w-full max-w-[450px] h-[378px] -mb-12 -mt-40" />
        <EmptyViewTitle>404 ERROR!</EmptyViewTitle>
        <EmptyViewDescription>
          Không tồn tại hoặc bạn không có quyền truy cập vào trang này!
        </EmptyViewDescription>
        <Button asChild size="lg">
          <Link href="/" className="mt-8">
            Quay về trang chủ
          </Link>
        </Button>
      </EmptyView>
    </div>
  )
}

export default NotFoundPage
