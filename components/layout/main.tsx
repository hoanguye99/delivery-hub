import React from "react"
import { Slot } from "@radix-ui/react-slot"

interface MainLayoutProps {
  asChild: boolean
  children: React.ReactNode
}

const MainLayout = (props: MainLayoutProps) => {
  const Comp = props.asChild ? Slot : MainLayoutInternal
  return <Comp {...props} />
}

const MainLayoutInternal = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <p className="text-red-500">Authenticated Layout</p>
      {props.children}
    </div>
  )
}

export default MainLayout
