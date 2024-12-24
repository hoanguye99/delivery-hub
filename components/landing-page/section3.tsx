import React from "react"
import { contactData } from "./data"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"

const Section3 = () => {
  return (
    <section className="container mx-auto relative bg-white py-10 pt-0 px-4 flex flex-col items-center">
      <h2 className="text-typography-title text-heading-4">Nói về chúng tôi</h2>
      <p className="my-5 text-body-1 leading-7 text-typography-body max-w-xl text-center">
        Từ khi đặt chân vào Việt Nam năm 2018, J&T Express luôn nỗ lực hết mình,
        hoàn thành nghĩa vụ của một đối tác vận chuyển lớn trong khu vực, mang
        lại dịch vụ tốt nhất cho tất cả khách hàng, nhận về nhiều lời khen và
        nhận xét tích cực. Đây là sự tự hào và động lực để J&T Express tiếp tục
        giữ vững thành tích, phát huy dịch vụ, nâng cao hơn nữa trải nghiệm
        khách hàng.
      </p>
      <div className="mx-auto my-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {contactData.map(({ title, icon, description }) => (
          <Card className="border-none shadow-none">
            <CardContent className="text-center items-center gap-5 p-0">
              <Badge size="large" iconOnly className="h-16">
                {icon}
              </Badge>
              <p className="text-title-2 font-bold text-typography-title">
                {title}
              </p>
              <p className="text-body-3 text-[15px] leading-6 text-typography-body">
                {description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Section3
