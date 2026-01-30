import React from "react";
import tour from "../../../public/category/tour.jpg";

const BrowseCategory = () => {
  return (
    <>
      <section className="flex justify-center py-15 px-4">
        <div className="w-full lg:w-295">
          <div className="pb-8 flex flex-col gap-2">
            <span className="text-[#FF6D3A] uppercase font-semibold ">
              Explore
            </span>
            <h2 className="text-[#1E3A5F] text-4xl  font-bold">
              Browse by Category
            </h2>
            <p className="text-[#64748B]">
              Find the perfect vehicle for every occasion{" "}
            </p>
          </div>
          {/* Explore category */}
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="border border-solid border-[#E2E8F0] w-fit p-5 rounded-2xl flex flex-col gap-3">
              <img
                src={tour}
                width={200}
                alt=""
                className="bg-cover bg-no-repeat rounded-2xl"
              />
              <span className="text-lg font-bold ">Category</span>
              <span className="text-[#94A3B8]">40 vehicles</span>
              <button className="w-fit bg-[#fad9cd] text-[#FF6D3A] font-semibold  px-5 py-2 rounded-lg hover:text-[#fad9cd] hover:bg-[#FF5D3A] transition duration-300 ease-in-out">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrowseCategory;
