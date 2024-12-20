import React from "react"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { featuresData, teamData, contactData } from "./data"

const LandingPage = () => {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://jtexpress.vn/storage/app/uploads/public/670/5db/cd9/6705dbcd95c87495087981.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              {/* <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              ></Typography>
              <Typography
                variant="lead"
                color="white"
                className="opacity-80"
              ></Typography> */}
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))} */}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <p className="text-typography-title text-heading-4">
                VỀ CHÚNG TÔI
              </p>
              <p className="my-5 text-body-2 text-typography-body">
                J&T Express là thương hiệu chuyển phát nhanh dựa trên sự phát
                triển của công nghệ và Internet. Chúng tôi sở hữu mạng lưới rộng
                khắp nhằm hỗ trợ các hoạt động giao nhận hàng hóa nhanh chóng
                không chỉ ở nội thành mà còn ở ngoại thành và các vùng xa của
                các tỉnh thành trong cả nước Việt Nam.
              </p>
              <Button className="capitalize">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card>
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="https://jtexpress.vn/storage/app/uploads/public/66f/e47/da5/66fe47da50423462360460.jpg"
                    className="h-full w-full rounded-lg"
                  />
                </CardHeader>
                <CardContent className="gap-3">
                  <p className=" text-typography-body text-body-3">
                    Doanh nghiệp
                  </p>
                  <CardTitle>Vận chuyển</CardTitle>
                  <p className="text-typography-body text-body-2 mt-3">
                    J&T Express tự hào đã & đang mở rộng mạng lưới quốc tế để
                    mang đến trải nghiệm tốt nhất
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage
