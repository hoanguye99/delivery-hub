import { toast } from "sonner"
import { Button } from "../ui/button"
import Footer from "./footer"
import Header from "./header"
import Section1 from "./section1"
import Section2 from "./section2"
import Section3 from "./section3"

const LandingPage = () => {
  return (
    <>
      {/* <Button
        className="!fixed bottom-5 right-1/2 z-50"
        onClick={() =>
          // toast.success(
          //   'Successfully <b>toasted</b> omg Successfully <b>toasted</b> omg fsef sfeesf s Successfully <b>toasted</b> omg',
          //   {
          //     duration: Infinity,
          //   }
          // )
          toast.promise(
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const random = Math.random()
                if (random < 0.5) {
                  resolve("Promise resolved successfully.")
                } else {
                  reject(new Error("Promise rejected with an error."))
                }
              }, 500)
            }),
            {
              loading: "Saving",
              success: "<b>Saved</b>",
              error: "Could not be saved",
              duration: Infinity,
            }
          )
        }
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.5 4C3.11929 4 2 5.11929 2 6.5V18.1667C2 19.5474 3.11929 20.6667 4.5 20.6667H19.5C20.8807 20.6667 22 19.5474 22 18.1667V6.5C22 5.11929 20.8807 4 19.5 4H4.5ZM12.0001 14.2929L3.66667 6.71697V18.1667C3.66667 18.6269 4.03976 19 4.5 19H19.5C19.9602 19 20.3333 18.6269 20.3333 18.1667V6.71717L12.0001 14.2929ZM12.0001 12.0405L19.0112 5.66667H4.98901L12.0001 12.0405Z"
            fill="#00204D"
            fill-opacity="0.6"
          />
        </svg>
      </Button> */}
      <Header />
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 -z-10">
        <div className="absolute top-0 h-full w-full bg-[url('https://jtexpress.vn/storage/app/uploads/public/670/5db/cd9/6705dbcd95c87495087981.jpg')] bg-cover bg-center" />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  )
}

export default LandingPage
