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

const UpcomingEvents = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="bg-[#111111] pt-20 pb-16">
      <h3 className="font-bold text-4xl text-[#E0E0E0] text-center pb-8">
        Upcoming Events
      </h3>
      <div className="flex items-center gap-8 w-4/5 mx-auto relative">
        {/* Custom Prev Button */}
        <button
          ref={prevRef}
          className="absolute left-[-2rem] top-1/2 z-10 -translate-y-1/2 bg-[#FF00FF] hover:bg-[#e000e0] p-3 rounded-full shadow-lg transition"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
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
                <p className="font-bold text-2xl text-[#00FFFF] uppercase pt-4 pl-6">
                  MAR 15
                </p>
                <span className="font-semibold text-[20px] text-[#E0E0E0] pt-4 pl-6 block">
                  Pulse Nightclub
                </span>
                <span className="font-normal text-base text-[#9CA3AF] flex gap-2 items-center pt-4 pl-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <defs>
                      <clipPath id="clipPath2505759806">
                        <path
                          d="M0 0L16 0L16 16L0 16L0 0Z"
                          fill-rule="nonzero"
                          transform="matrix(1 0 0 1 -0 -0)"
                        />
                      </clipPath>
                    </defs>
                    <g clip-path="url(#clipPath2505759806)">
                      <path
                        d="M5.38338 15.6772C0.842813 9.09472 0 8.41916 0 6C0 2.68628 2.68628 0 6 0C9.31372 0 12 2.68628 12 6C12 8.41916 11.1572 9.09472 6.61662 15.6772C6.31866 16.1076 5.68131 16.1076 5.38338 15.6772ZM6 8.5C7.38072 8.5 8.5 7.38072 8.5 6C8.5 4.61928 7.38072 3.5 6 3.5C4.61928 3.5 3.5 4.61928 3.5 6C3.5 7.38072 4.61928 8.5 6 8.5Z"
                        fill-rule="nonzero"
                        transform="matrix(1 0 0 1 2 0)"
                        fill="rgb(156, 163, 175)"
                      />
                    </g>
                  </svg>
                  New York, NY
                </span>
                <button className="w-4/5 border block border-[#FF00FF] text-[#E0E0E0] font-medium text-base rounded-lg text-center py-2 mx-auto my-6">
                  Buy tickets
                </button>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Next Button */}
        <button
          ref={nextRef}
          className="absolute right-[-2rem] top-1/2 z-10 -translate-y-1/2 bg-[#FF00FF] hover:bg-[#e000e0] p-3 rounded-full shadow-lg transition"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  );
};

export default UpcomingEvents;
