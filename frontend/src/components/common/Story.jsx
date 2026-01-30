import React from "react";

const Story = () => {
  return (
    <>
      <section className="py-16 w-full lg:container px-4 mx-auto flex gap-5">
        <div className="w-[95%] ">
          <div className="border h-full rounded-xl">
            <img src="" alt="Image is to be placed" />
          </div>
        </div>
        <div className="w-295 mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <span className="font-bold text-[#FF6D3A] ">My Story</span>
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6 ">
              How It All Started
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              I started working on WheelDeal in 2025 as part of my final year
              college project. The idea came from noticing how difficult it can
              be to rent vehicles in Nepal both for people who need them and for
              vehicle owners. I wanted to create something simple, reliable, and
              accessible, that could help bridge that gap.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              This project allowed me to explore real-world problems and build a
              platform that lets people rent vehicles safely and conveniently.
              While it's still a student project, I hope it can make vehicle
              rental easier and more trustworthy for everyone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
