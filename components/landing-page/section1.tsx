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

import { Badge } from "../ui/badge"

interface Section1Props {}

const Section1 = (props: Section1Props) => {
  return (
    <section className="-mt-32 pb-20 pt-4 container mx-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {featuresData.map(({ title, icon, description }) => (
          <FeatureCard
            key={title}
            title={title}
            icon={icon}
            description={description}
          />
        ))}
      </div>
      <div className="mt-32 flex flex-wrap items-center">
        <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
          <h2 className="text-typography-title text-heading-4">VỀ CHÚNG TÔI</h2>
          <p className="my-5 text-body-2 text-typography-body">
            J&T Express là thương hiệu chuyển phát nhanh dựa trên sự phát triển
            của công nghệ và Internet. Chúng tôi sở hữu mạng lưới rộng khắp nhằm
            hỗ trợ các hoạt động giao nhận hàng hóa nhanh chóng không chỉ ở nội
            thành mà còn ở ngoại thành và các vùng xa của các tỉnh thành trong
            cả nước Việt Nam.
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
              <p className=" text-typography-body text-body-3">Doanh nghiệp</p>
              <CardTitle>Vận chuyển</CardTitle>
              <p className="text-typography-body text-body-2 mt-3">
                J&T Express tự hào đã & đang mở rộng mạng lưới quốc tế để mang
                đến trải nghiệm tốt nhất
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

const FeatureCard = (props: FeatureCardProps) => {
  return (
    <Card>
      <CardContent className="text-center items-center pt-6">
        <Badge size="large" iconOnly className="h-16 [&_svg]:size-8">
          {props.icon}
        </Badge>
        <p className="text-title-2 font-bold text-typography-title">
          {props.title}
        </p>
        <p className="text-body-2 text-typography-body">{props.description}</p>
      </CardContent>
    </Card>
  )
}

export default Section1
