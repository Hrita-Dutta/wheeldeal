import React from "react";

const MissionAndVision = () => {
  return (
    <>
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">
                My Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The goal of this project is to create a simple and safe way for
                people in Nepal to rent vehicles. I wanted to build something
                that helps vehicle owners share their vehicles and lets users
                explore the country more easily—all while keeping it affordable
                and reliable.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">
                My Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                As a student project, I hope WheelDeal can grow into a helpful
                platform for people in Nepal to rent vehicles easily and safely.
                My aim is to build something trustworthy and simple, so every
                journey can be enjoyable and stress free even if it's just a
                small step toward something bigger.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionAndVision;
