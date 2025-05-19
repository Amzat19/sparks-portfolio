"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import EventImage from "../../public/images/event-1.png";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EquipmentRentals = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="bg-[#111111] pt-20 pb-16">
      <h3 className="font-bold text-2xl sm:text-4xl text-[#E0E0E0] text-center pb-8">
        Equipment Rentals
      </h3>
      <div className="flex items-center gap-8 w-4/5 mx-auto relative">
        {/* Custom Prev Button */}
        <button
          ref={prevRef}
          className="absolute left-[-2rem] top-1/2 z-10 -translate-y-1/2 bg-[#00FFFF] hover:bg-[#00d5d5]  p-3 rounded-full shadow-lg transition hidden sm:block"
        >
          <ChevronLeft className="w-5 h-5 text-black" />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // ensure navigation params are set
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current!;
              swiper.params.navigation.nextEl = nextRef.current!;
            }
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[1, 2, 3, 4].map((_, index) => (
            <SwiperSlide key={index}>
              <article className="w-[280px] lg:w-[362px] bg-[#1A1A1A] rounded-md pb-2">
                <Image src={EventImage} alt="Event Preview" className="" />
                <p className="font-bold text-[20px] text-[#E0E0E0] pt-4 pl-6">
                  PA System
                </p>
                <span className="font-normal text-base text-[#9CA3AF] flex gap-2 items-center pt-4 pl-6">
                  Complete sound system with subwoofers
                </span>
                <span className="font-bold lg:text-[20px] text-base text-[#00FFFF] pt-4 pl-6 block">
                  $300/day
                </span>
                <button className="w-4/5 border block border-[#00FFFF] text-[#E0E0E0] font-medium text-base rounded-lg text-center py-2 mx-auto my-6">
                  Request Rental
                </button>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Next Button */}
        <button
          ref={nextRef}
          className="absolute right-[-2rem] top-1/2 z-10 -translate-y-1/2 bg-[#00FFFF] hover:bg-[#00d5d5] p-3 rounded-full shadow-lg transition hidden sm:block"
        >
          <ChevronRight className="w-5 h-5 text-black" />
        </button>
      </div>
    </section>
  );
};

export default EquipmentRentals;
