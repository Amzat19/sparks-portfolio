"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Gallery = () => {
  const images = [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-6.jpg",
    "/images/gallery/gallery-7.jpg",
    "/images/gallery/gallery-9.jpg",
    "/images/gallery/gallery-10.jpg",
  ];

  return (
    <section className="bg-black pb-16 pt-8" id="gallery">
      <div className="w-[90%] mx-auto">
        <h2 className="text-[#FF00FF] text-center text-bold text-[30px] sm:text-[40px] pt-6 mb-2 font-bold">
          GALLERY
        </h2>
        <p className="font-semibold sm:text-2xl text-lg text-[#E0E0E0] text-center pb-8">
          Explore our collection of stunning images during events.
        </p>

        {/* Mobile Swiper */}
        <div className="sm:hidden w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="rounded-lg"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={src}
                  width={400}
                  height={300}
                  alt={`Event image ${index + 1}`}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              width={400}
              height={300}
              alt={`Event image ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
