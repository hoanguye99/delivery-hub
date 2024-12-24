import React from "react"
import { teamData } from "./data"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const Section2 = () => {
  return (
    <section className="container mx-auto pt-20 pb-48 text-center">
      <h2 className="text-typography-title text-heading-4">Tin tức nổi bật</h2>
      <p className="my-5 text-body-1 text-typography-body">
        Thông tin nổi bật về J&T Express mà bạn không thể bỏ lỡ
      </p>
      <div className="mt-24 grid grid-cols-1 gap-10 gap-x-30 md:grid-cols-2 xl:grid-cols-3">
        {teamData.map(({ img, name, position }) => (
          <Card>
            <CardHeader className="relative h-72">
              <img
                alt="Card Image"
                src={img}
                className="h-full w-full rounded-lg"
              />
            </CardHeader>
            <CardContent className="gap-2">
              <CardTitle className="text-xl">{name}</CardTitle>
              <p className="text-typography-body text-body-3 mt-1">
                {position}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Section2
