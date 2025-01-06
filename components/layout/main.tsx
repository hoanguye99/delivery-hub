import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { SidebarProvider } from "../ui/sidebar"
import { AppSidebar } from "../app-sidebar"

interface MainLayoutProps {
  asChild?: boolean
  children: React.ReactNode
}

const MainLayout = (props: MainLayoutProps) => {
  const Comp = props.asChild ? Slot : MainLayoutInternal
  return <Comp {...props} />
}

const MainLayoutInternal = (props: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      {props.children}
    </SidebarProvider>
  )
}

export default MainLayout
