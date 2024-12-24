import Footer from "./footer"
import Header from "./header"
import Section1 from "./section1"
import Section2 from "./section2"
import Section3 from "./section3"

const LandingPage = () => {
  return (
    <>
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
