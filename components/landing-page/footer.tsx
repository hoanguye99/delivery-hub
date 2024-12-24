import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href=""
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://jtexpress.vn/themes/jtexpress/assets/images/logo.png"
              className="h-8"
              alt="J&amp;T Express - Giao hàng Chuyển phát nhanh"
            ></img>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-caption-1 sm:mb-0 text-typography-title">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-caption-1 text-typography-title text-center">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            J&T Express
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
