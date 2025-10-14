"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "RoofWeiler did an excellent job replacing my roof. Their team was professional and courteous throughout the entire process. I highly recommend them for any roofing needs.",
    author: "John D",
  },
  {
    quote:
      "I recently had my windows replaced by RoofWeiler. Their team was knowledgeable and efficient, and the windows look great. I would definitely use them again.",
    author: "Sara M",
  },
  {
    quote:
      "Roofweiler excelled in communication throughout our roofing project, providing constant updates and clear explanations from start to finish. Their professionalism and commitment to customer satisfaction were evident, ensuring a smooth process and high-quality results. We highly recommend Roofweiler for their reliable and communicative roofing services.",
    author: "Michel P",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTransition = (newIndex: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 300);
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    handleTransition(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    handleTransition(newIndex);
  };

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      handleTransition(index);
    }
  };

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#000000] mb-8 tracking-tight">
          HAPPY CUSTOMERS
        </h2>

        <div className="relative flex items-center justify-between  min-h-[285px]">
          {/* Previous Button - Left side */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="shrink-0 hover:bg-transparent absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft
              className="text-[#000000]"
              strokeWidth={1.5}
              style={{ width: "48px", height: "48px" }}
            />
          </Button>

          {/* Testimonial Content */}
          <div
            className={`flex-1 max-w-4xl mx-auto text-center px-16 transition-opacity duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Quote Icon */}
            <div className="mb-8">
              <svg
                width="48"
                height="40"
                viewBox="0 0 48 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path
                  d="M0 40V23.3333C0 16.4444 1.77778 10.7778 5.33333 6.33333C8.88889 1.88889 14.2222 0 21.3333 0V6.66667C17.7778 6.66667 14.8889 7.77778 12.6667 10C10.4444 12.2222 9.33333 15.1111 9.33333 18.6667H21.3333V40H0ZM26.6667 40V23.3333C26.6667 16.4444 28.4444 10.7778 32 6.33333C35.5556 1.88889 40.8889 0 48 0V6.66667C44.4444 6.66667 41.5556 7.77778 39.3333 10C37.1111 12.2222 36 15.1111 36 18.6667H48V40H26.6667Z"
                  fill="#ffde11"
                />
              </svg>
            </div>

            {/* Quote Text */}
            <p className="text-lg text-[#1a1a1a] leading-relaxed mb-8 px-4">
              {testimonials[currentIndex].quote}
            </p>

            {/* Author */}
            <p className="text-lg font-bold text-[#000000]">
              {testimonials[currentIndex].author}
            </p>
          </div>

          {/* Next Button - Right side */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="shrink-0 hover:bg-transparent absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight
              className="text-[#000000]"
              strokeWidth={1.5}
              style={{ width: "48px", height: "48px" }}
            />
          </Button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 w-2.5 rounded-full border-2 transition-colors cursor-pointer ${
                index === currentIndex
                  ? "bg-[#ffde11] border-[#ffde11]"
                  : "bg-transparent border-[#000000]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
