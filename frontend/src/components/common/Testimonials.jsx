import React from "react";
import TestimonialCard from "../widgets/TestimonialCard";

const Testimonials = () => {
  return (
    <>
      <section className="bg-[#F8FAFC] flex flex-col items-center py-8 px-4">
        <div className="w-full lg:container">
          {/* Top Section */}
          <div className="text-center py-5">
            <span className="text-sm font-bold uppercase text-[#FF6D3A] ">
              Testimonials
            </span>
            <h2 className="text-4xl  font-bold text-[#1E3A5F] pb-8">
              What customers Say
            </h2>
          </div>
          {/* Card Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
