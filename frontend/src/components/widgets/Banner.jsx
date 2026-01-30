import React from "react";

const Banner = ({ subTitle, title, description }) => {
  return (
    <>
      <section className="bg-[#1E3A5F] flex justify-center">
        <div className="text-white py-20 w-full lg:container">
          <div className="container px-6 w-full lg:w-[50%]">
            <span className="font-bold text-[#FF6D3A] ">{subTitle}</span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 ">{title}</h1>
            <p className="text-[#94A3B8] max-w-3xl">{description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
