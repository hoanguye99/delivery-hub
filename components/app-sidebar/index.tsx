import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import JTlogo from "@/public/images/J&T Express Logo.png"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { useRouter } from "next/router"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar()
  const router = useRouter()
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link href="/">
          <Image src={JTlogo} alt="JT logo" className="w-48"></Image>
        </Link>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={router.pathname === item.url}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <Button>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="curentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white fill-white size-5 -mt-0.5"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.5188 4.06957C10.6701 3.80263 11.0091 3.70885 11.2761 3.86012C13.1165 4.90302 14.3355 6.92078 14.3355 9.1768C14.3355 12.5392 11.5868 15.2879 8.22439 15.2879C4.86201 15.2879 2.11328 12.5392 2.11328 9.1768C2.11328 6.91223 3.33903 4.96014 5.16078 3.86708C5.42388 3.70922 5.76514 3.79454 5.923 4.05764C6.08086 4.32074 5.99555 4.66199 5.73245 4.81985C4.22087 5.7268 3.22439 7.33026 3.22439 9.1768C3.22439 11.9255 5.47566 14.1768 8.22439 14.1768C10.9731 14.1768 13.2244 11.9255 13.2244 9.1768C13.2244 7.32171 12.2212 5.67281 10.7283 4.82681C10.4613 4.67554 10.3676 4.33652 10.5188 4.06957Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.22439 1.95459C8.53122 1.95459 8.77995 2.20332 8.77995 2.51015V6.39903C8.77995 6.70586 8.53122 6.95459 8.22439 6.95459C7.91757 6.95459 7.66884 6.70586 7.66884 6.39903V2.51015C7.66884 2.20332 7.91757 1.95459 8.22439 1.95459Z"
            />
          </svg>
          {state === "expanded" && <span>Đăng xuất</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
