import { cx } from "class-variance-authority"
import dayjs from "dayjs"
import React from "react"

export const ContainerFormBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cx('px-6 py-4 flex flex-col gap-6 max-h-[calc(100vh-20rem)] overflow-auto', className)}
    {...props}
  />
))

interface LastUpdatedProps {
  updated_by?: string
  updated_time?: string
}
export const ContainerLastUpdated = (props: LastUpdatedProps) => {
  return (
    <div className="flex gap-3 py-2.5 px-4 items-center justify-between rounded-lg bg-primary-foreground border border-border-2">
      <p className="flex flex-wrap gap-2">
        <span className="text-label-3 text-typography-label">Last updated:</span>
        <span className="text-body-3 text-typography-body">
          {props.updated_by}
        </span>
      </p>
      <p className="flex flex-wrap gap-2">
        <span className="text-label-3 text-typography-label">When:</span>
        <span className="text-body-3 text-typography-body">
          {dayjs(props.updated_time).format("DD/MM/YYYY HH:mm")}
        </span>
      </p>
    </div>
  )
}
