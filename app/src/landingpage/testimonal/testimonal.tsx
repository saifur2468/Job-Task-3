"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// ... testimonialsData একই থাকবে

export default function TestimonialSection() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="bg-[#EAEAEA] py-20 px-4 md:px-12 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">
              TESTIMONIALS
            </span>

            <h2 className="text-3xl md:text-5xl font-serif italic text-gray-900 font-normal">
              What Our Clients <br />
              <span className="font-sans not-italic font-bold">
                Say About Us
              </span>
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              ref={prevRef}
              aria-label="Previous slide"
              className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
            >
              ←
            </button>

            <button
              ref={nextRef}
              aria-label="Next slide"
              className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
            >
              →
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
          onInit={(swiper) => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;

              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          className="w-full !overflow-visible"
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id} className="h-full">
              <div className="relative bg-[#EAEAEA] pr-6 flex flex-col justify-between h-full min-h-[300px]">

                <div className="absolute right-0 top-0 text-[180px] leading-none font-serif text-gray-300 opacity-40 pointer-events-none select-none">
                  “
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold font-serif text-gray-900">
                      “
                    </span>

                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 relative z-10">
                    {item.comment}
                  </p>
                </div>

                <div>
                  <hr className="border-gray-300 mb-6" />

                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">
                        {item.name}
                      </h4>

                      <p className="text-[10px] tracking-wider text-gray-500 font-semibold uppercase">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}