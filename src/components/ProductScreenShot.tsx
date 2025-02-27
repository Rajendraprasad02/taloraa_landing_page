"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ss1 from "../assets/productss/1.png";
import ss2 from "../assets/productss/2.png";
import ss3 from "../assets/productss/3.png";
import ss4 from "../assets/productss/4.png";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ScreenshotProps {
  image: string;
  title: string;
  description: string;
}

const screenshots: ScreenshotProps[] = [
  {
    image: ss1,
    title: "Dashboard",
    description:
      "Get a quick snapshot of your workforce, approvals, and HR insights.",
  },
  {
    image: ss2,
    title: "Employee Details",
    description:
      "Easily add, update, and manage employee records in one place.",
  },
  {
    image: ss3,
    title: "Attendance",
    description:
      "Automate attendance tracking, approve leave requests, and manage shifts efficiently.",
  },
  {
    image: ss4,
    title: "Project",
    description:
      "Seamlessly track project progress, assign tasks, and collaborate with your team.",
  },
];

export const ProductScreenshots = () => {
  return (
    <section id="screenshots" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Experience Taloraa in Action
      </h2>

      <p className="text-xl text-muted-foreground text-center pt-4 pb-8">
        Take a closer look at how Taloraa simplifies your HR processes.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        className="max-w-5xl mx-auto"
      >
        {screenshots.map(({ image, title, description }) => (
          <SwiperSlide key={title} className="px-12 pb-12">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-center">{title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <img
                  src={image}
                  alt={title}
                  className="rounded-lg w-full h-auto shadow-md"
                />
                <p className="text-center text-sm text-muted-foreground my-4">
                  {description}
                </p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
