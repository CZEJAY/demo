"use client";
import { reviews } from "@/lib/data";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function Reviews() {
  return (
    <section className="max-content space-y-5">
      <div className="space-y-4 text-center">
        <span className=" text-xl uppercase text-center">
          FOR PROFESSIONALS ACROSS THE GLOBE
        </span>
        <h2 className="">
          Join the professionals who depend on us for success.
        </h2>
        <p className="text-black/50">Find solutions that help individuals and businesses like yours.</p>
      </div>

      <div className="max-md:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={50}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          speed={700}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full rounded-xl cursor-pointer"
        >
          {reviews.map((item, idx) => (
            <SwiperSlide
              className="bg-silverGray/20 p-5  rounded-md pb-10"
              key={idx}
            >
              <CardItem
                src={item.src}
                altText={item.altText}
                reviewText={item.reviewText}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Settings */}
      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          speed={700}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full rounded-xl cursor-pointer md:hidden"
        >
          {reviews.map((item, idx) => (
            <SwiperSlide
              className="bg-silverGray/20 p-5 rounded-md pb-20"
              key={idx}
            >
              <CardItem
                src={item.src}
                altText={item.altText}
                reviewText={item.reviewText}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function CardItem({
  src,
  altText,
  reviewText,
}: {
  src: string;
  altText: string;
  reviewText: string;
}) {
  return (
    <div className="flex flex-col justify-between min-h-[20rem]">
      <div className="bg-white px-10 py-2 w-[fit-content] mb-5 rounded-md ">
        <Image
          src={`/assets/${src}.png`}
          width={500}
          height={500}
          alt={altText}
          className="size-10"
        />
      </div>
      <p className="text-black/50">{reviewText}</p>
    </div>
  );
}
