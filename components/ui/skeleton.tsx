import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export const TableSkeleton = (props: { numberRow?: number }) => {
  return (
    <>
      <div className="flex flex-col gap-5 p-1 rounded-lg">
        {[...Array(props.numberRow ?? 9)].map((_, index) => (
          <Skeleton className="h-8" />
        ))}
      </div>
    </>
  )
}

export { Skeleton }
