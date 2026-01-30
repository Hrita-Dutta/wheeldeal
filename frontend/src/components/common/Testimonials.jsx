import React from "react";

const Testimonials = () => {
  return (
    <>
      <section className="bg-[#F8FAFC] flex flex-col items-center py-8 px-4">
        <div className="w-full lg:w-295">
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
            <div className="rounded-2xl bg-white p-5 w-full lg:w-[31%]">
              {/* Card Paragraph Section */}
              <p className="p-3 font-light">
                WheelDeal made our family trip so easy! Highly recommended
                service.
              </p>
              {/* Card Person name section */}
              <div className="flex justify-between pt-8 items-center">
                <div className="flex gap-3 items-center">
                  <span className="px-2 py-3 text-white rounded-[100%] bg-[#1E3A5F]">
                    Logo
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold  text-[#1E3A5F]">
                      Hari Bahadur
                    </span>
                    <span className="text-xs text-[#94A3B8]">Kathmandu</span>
                  </div>
                </div>
                <span>rating</span>
              </div>
            </div>
            {/* replica */}
            <div className="rounded-2xl bg-white p-5 w-full lg:w-[31%]">
              {/* Card Paragraph Section */}
              <p className="p-3 font-light">
                WheelDeal made our family trip so easy! Highly recommended
                service.
              </p>
              {/* Card Person name section */}
              <div className="flex justify-between pt-8 items-center">
                <div className="flex gap-3 items-center">
                  <span className="px-2 py-3 text-white rounded-[100%] bg-[#1E3A5F]">
                    Logo
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold  text-[#1E3A5F]">
                      Hari Bahadur
                    </span>
                    <span className="text-xs text-[#94A3B8]">Kathmandu</span>
                  </div>
                </div>
                <span>rating</span>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-5 w-full lg:w-[31%]">
              {/* Card Paragraph Section */}
              <p className="p-3 font-light">
                WheelDeal made our family trip so easy! Highly recommended
                service.
              </p>
              {/* Card Person name section */}
              <div className="flex justify-between pt-8 items-center">
                <div className="flex gap-3 items-center">
                  <span className="px-2 py-3 text-white rounded-[100%] bg-[#1E3A5F]">
                    Logo
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold  text-[#1E3A5F]">
                      Hari Bahadur
                    </span>
                    <span className="text-xs text-[#94A3B8]">Kathmandu</span>
                  </div>
                </div>
                <span>rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
