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
import { useState } from "react";

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
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="screenshots" className="container py-24 sm:py-28">
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
        className="mx-auto"
      >
        {screenshots.map(({ image, title, description }) => (
          <SwiperSlide key={title} className="md:px-12 md:pb-12">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-center">{title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                {/* Clicking image opens zoom modal */}
                <img
                  src={image}
                  alt={title}
                  className="rounded-lg w-full h-auto shadow-md cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                />
                <p className="text-center text-sm text-muted-foreground my-4">
                  {description}
                </p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-7xl w-full p-4">
            <button
              className="absolute -top-4 right-4 lg:top-1 lg:-right-4 font-base lg:font-bold text-white text-lg cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Zoomed"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};
