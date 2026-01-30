import React from "react";

const How = () => {
  return (
    <>
      <section className="bg-[#F8FAFC] flex justify-center py-15 px-4">
        <div className="w-full lg:container flex flex-col gap-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[#FF6D3A] uppercase font-semibold ">
              Simple Process
            </span>
            <h2 className="text-[#1E3A5F] text-4xl font-bold">How It Works</h2>
            <p className="text-[#64748B]">
              Get your perfect vehicle in just 3 easy steps{" "}
            </p>
          </div>
          {/* Steps Div */}
          <div className="flex flex-col lg:flex-row items-center justify-center ">
            {/* Step 1 */}
            <div className="border border-solid border-[#E2E8F0] w-full lg:w-fit bg-white py-5 px-8 lg:px-18 rounded-2xl">
              <div className="flex flex-col items-center w-full lg:w-50 gap-3">
                <span className="bg-[#1E3A5F] text-white rounded-[100%] px-7 py-5 w-fit text-xl font-bold">
                  1
                </span>
                <span className="text-[#1E3A5F] text-xl  font-bold">
                  Search
                </span>
                <p className="text-[#64748B] text-center">
                  Browse our wide selection of verified vehicles
                </p>
              </div>
            </div>

            {/* border dashed */}
            <div className="hidden lg:block border-dashed border-t-3 border-[#E2E8F0] w-21"></div>

            {/* Step 2 */}
            <div className="border border-solid border-[#E2E8F0] w-full lg:w-fit bg-white py-5 px-8 lg:px-18 rounded-2xl">
              <div className="flex flex-col items-center w-full lg:w-50 gap-3">
                <span className="bg-[#FF6D3A] text-white rounded-[100%] px-7 py-5 w-fit text-xl font-bold">
                  2
                </span>
                <span className="text-[#1E3A5F] text-xl  font-bold">Book</span>
                <p className="text-[#64748B] text-center">
                  Select dates & complete secure payment
                </p>
              </div>
            </div>
            {/* border dashed */}
            <div className="hidden lg:block border-dashed border-t-3 border-[#E2E8F0] w-21"></div>

            {/* Step 3 */}
            <div className="border border-solid border-[#E2E8F0] w-full lg:w-fit bg-white py-5 px-8 lg:px-18 rounded-2xl">
              <div className="flex flex-col items-center w-full lg:w-50 gap-3">
                <span className="bg-[#0EA5E9] text-white rounded-[100%] px-7 py-5 w-fit text-xl font-bold">
                  3
                </span>
                <span className="text-[#1E3A5F] text-xl  font-bold">Drive</span>
                <p className="text-[#64748B] text-center">
                  Pick up your vehicle and enjoy the journey!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default How;
