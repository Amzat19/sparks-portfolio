"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import EventImage from "../../public/images/event-1.png";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import equipments from "@/data/equipments";

const EquipmentRentals = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params.navigation &&
      typeof swiperRef.current.params.navigation !== "boolean"
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      // Re-init navigation
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="bg-[#111111] pt-20 pb-16" id="equipments">
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
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {equipments.map((item, index) => (
            <SwiperSlide key={index}>
              <article className="w-[280px] lg:w-[362px] bg-[#1A1A1A] rounded-md pb-2">
                <Image
                  src={item.image}
                  alt="Event Preview"
                  className="w-full h-[320px]"
                  width={300}
                  height={250}
                />
                <p className="font-bold text-[20px] text-[#E0E0E0] pt-4 pl-6">
                  {item.name}
                </p>
                <span className="font-normal text-base text-[#9CA3AF] flex gap-2 items-center pt-4 pl-6">
                  {item.description}
                </span>
                {/* <span className="font-bold lg:text-[20px] text-base text-[#00FFFF] pt-4 pl-6 block">
                  $300/day
                </span> */}
                <button
                  className="w-4/5 border block border-[rgb(0,255,255)] text-[#E0E0E0] font-medium text-base rounded-lg text-center py-2 mx-auto my-6 cursor-pointer"
                  onClick={() =>
                    window.open("https://wa.me/17048310677", "_blank")
                  }
                >
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
