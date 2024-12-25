import Link from "next/link"
import { Button } from "../ui/button"

export default function Header() {
  return (
    <div className="z-40 fixed top-0 inset-x-0 bg-transparent">
      {/* <Menu as="div" className="relative"> */}
      <div className="relative">
        {/* <Transition
          className="fixed inset-0 bottom-12 bg-brand-hover origin-top"
          enter="transition duration-300 ease-out"
          enterFrom="transform scale-y-[0.1] opacity-0"
          enterTo="transform scale-y-100 opacity-100"
          leave="transition duration-300 ease-out"
          leaveFrom="transform scale-y-100 opacity-100"
          leaveTo="transform scale-y-[0.1] opacity-0"
        >
          <Menu.Items>
            <Transition.Child
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="mt-24 flex flex-col gap-2 *:py-3 *:px-5 *:mx-5 *:text-title-2 *:font-bold *:text-left *:rounded-xl *:transition *:ease-in-out *:duration-200 text-white hover:*:bg-brand-base/30 ui-active:*:bg-brand-base/30">
                <Menu.Item as="button">Product</Menu.Item>
                <Menu.Item as="button">Pricing</Menu.Item>
                <Menu.Item as="button">Contact</Menu.Item>
                <div className="border-t border-white/30 !rounded-none !py-0 !mx-9 my-4"></div>
                <Menu.Item as={Link} href="/login">
                  {t("welcome.header.login")}
                </Menu.Item>
              </div>
            </Transition.Child>
          </Menu.Items>
        </Transition> */}
        <div className="w-fit mx-auto py-1.5 md:py-4">
          <div className="w-full p-1 pl-3 bg-white shadow-xl rounded-xl flex justify-between items-center gap-12 border border-border">
            <div className="flex gap-16 items-center justify-center md:justify-start">
              <img
                src="https://jtexpress.vn/themes/jtexpress/assets/images/logo.png"
                className="h-8"
                alt="J&amp;T Express - Giao hàng Chuyển phát nhanh"
              ></img>
              <div className="md:flex gap-8 hidden">
                <Button
                  className="text-typography-title hover:text-typography-title"
                  variant="link"
                >
                  Dịch vụ
                </Button>
                <Button
                  className="text-typography-title hover:text-typography-title"
                  variant="link"
                >
                  Biểu phí
                </Button>
                <Button
                  className="text-typography-title hover:text-typography-title"
                  variant="link"
                >
                  Tra cứu
                </Button>
              </div>
            </div>
            <div className="hidden md:flex gap-4 items-center">
              <Button className="rounded-xl" asChild>
                <Link href="/login">Đăng nhập</Link>
              </Button>
            </div>
            {/* <div className="block md:hidden">
              <Menu.Button
                as={Button}
                iconOnly
                intent="grey"
                btnStyle="transparent-background"
                className="!bg-primary-background"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden ui-open:block"
                >
                  <path d="M13.4144 12.0002L20.4144 5.00015L19.0002 3.58594L12.0002 10.5859L5.00015 3.58594L3.58594 5.00015L10.5859 12.0002L3.58594 19.0002L5.00015 20.4144L12.0002 13.4144L19.0002 20.4144L20.4144 19.0002L13.4144 12.0002Z" />
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block ui-open:hidden"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 11.3333C2 11.0572 2.22386 10.8333 2.5 10.8333H21.5C21.7761 10.8333 22 11.0572 22 11.3333V12C22 12.2761 21.7761 12.5 21.5 12.5H2.5C2.22386 12.5 2 12.2761 2 12V11.3333Z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 5.5C2 5.22386 2.22386 5 2.5 5H21.5C21.7761 5 22 5.22386 22 5.5V6.16667C22 6.44281 21.7761 6.66667 21.5 6.66667H2.5C2.22386 6.66667 2 6.44281 2 6.16667V5.5Z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 17.1667C2 16.8905 2.22386 16.6667 2.5 16.6667H21.5C21.7761 16.6667 22 16.8905 22 17.1667V17.8333C22 18.1095 21.7761 18.3333 21.5 18.3333H2.5C2.22386 18.3333 2 18.1095 2 17.8333V17.1667Z"
                  />
                </svg>
              </Menu.Button>
            </div> */}
          </div>
        </div>
      </div>
      {/* </Menu> */}
    </div>
  )
}