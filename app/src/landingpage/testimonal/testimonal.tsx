"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

type Testimonial = {
  id: number;
  title: string;
  comment: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    title: "Perfect Service!",
    comment:
      "I cannot say enough great things about Rentnest. Their team is professional, knowledgeable, and truly cares about their clients. They helped me find the perfect home for my family.",
    name: "Monica Regan",
    role: "CLIENT OF AGENCY",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Great Agents!",
    comment:
      "Finding an apartment used to be a nightmare until I discovered this platform. The process was completely seamless and transparent from start to finish.",
    name: "James Tores",
    role: "CLIENT OF AGENCY",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Very Nice!",
    comment:
      "The virtual tour features and quick agent response saved me so much time. I was able to book my luxury rental within just two days!",
    name: "Katrin Forest",
    role: "CLIENT OF AGENCY",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Hassle-Free Renting!",
    comment:
      "As a landlord, listing my property was super quick and easy. I found verified, reliable tenants within a week. Highly recommended!",
    name: "David Miller",
    role: "PROPERTY OWNER",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Best Property Deals!",
    comment:
      "The filter options made it effortless to find an apartment within my exact budget and preferred location. Outstanding support team!",
    name: "Sophia Alva",
    role: "CLIENT OF AGENCY",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Transparent & Safe",
    comment:
      "No hidden fees or unexpected delays. Everything promised in the listing matched the actual property completely.",
    name: "Liam Chen",
    role: "TENANT",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Outstanding Quality!",
    comment:
      "From studio apartments to penthouse rentals, they have the best collection of verified spaces. The team guided me every step.",
    name: "Emma Watson",
    role: "CLIENT OF AGENCY",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Quick Response!",
    comment:
      "Their customer care is top notch. Whenever I had a question regarding the lease agreement, they answered instantly.",
    name: "Robert Fox",
    role: "CLIENT OF AGENCY",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Highly Recommend!",
    comment:
      "Moving to a new city was scary, but finding a furnished rental through this agency made the transition so smooth and easy.",
    name: "Olivia Brown",
    role: "TENANT",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "5 Star Experience!",
    comment:
      "Great communication, top-tier property options, and absolute professionalism. I wouldn't go anywhere else for property solutions.",
    name: "Daniel Vance",
    role: "CLIENT OF AGENCY",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
];

export default function TestimonialSection() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#EAEAEA] px-4 py-20 font-sans md:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-400">
              TESTIMONIALS
            </span>

            <h2 className="font-serif text-3xl font-normal italic text-gray-900 md:text-5xl">
              What Our Clients
              <br />

              <span className="font-sans font-bold not-italic">
                Say About Us
              </span>
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex shrink-0 gap-3">
            <button
              ref={prevRef}
              type="button"
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 text-xl transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              ←
            </button>

            <button
              ref={nextRef}
              type="button"
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 text-xl transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              →
            </button>
          </div>
        </div>

        {/* Slider */}
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
            const navigation = swiper.params.navigation;

            if (navigation && typeof navigation !== "boolean") {
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;

              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          className="w-full !overflow-visible"
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <article className="relative flex min-h-[300px] h-full flex-col justify-between bg-[#EAEAEA] pr-6">

                {/* Large Quote */}
                <div className="pointer-events-none absolute right-0 top-0 select-none font-serif text-[180px] leading-none text-gray-300 opacity-40">
                  “
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="font-serif text-2xl font-bold text-gray-900">
                      “
                    </span>

                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mb-8 text-sm leading-relaxed text-gray-700 md:text-base">
                    {item.comment}
                  </p>
                </div>

                {/* User */}
                <div>
                  <hr className="mb-6 border-gray-300" />

                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={item.avatar}
                        alt={`${item.name} profile`}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-gray-900 md:text-base">
                        {item.name}
                      </h4>

                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>

              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}