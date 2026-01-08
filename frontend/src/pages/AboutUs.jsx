import React from "react";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1E3A5F] flex justify-center px-4">
        <div className="text-white py-20 w-full lg:w-295">
          <div className="container px-6 w-full lg:w-[50%]">
            <span className="font-bold text-[#FF6D3A] italic">
              About WheelDeal
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 italic">
              Your Trusted Vehicle Rental Partner in Nepal
            </h1>
            <p className="text-[#94A3B8] max-w-3xl">
              Connecting travelers with verified vehicle owners since 2020.
              Making every journey safe, reliable, and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-16 w-full lg:w-295 px-4 mx-auto flex gap-5">
        <div className="w-[95%] ">
          <div className="border h-full rounded-xl">
            <img src="" alt="Image is to be placed" />
          </div>
        </div>
        <div className="w-295 mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <span className="font-bold text-[#FF6D3A] italic">My Story</span>
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6 italic">
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

      {/* Mission & Vision */}
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

      {/* Core Values */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Trust */}
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Trust</h3>
              <p className="text-gray-600 text-sm">
                We verify every vehicle and user to ensure safe, reliable
                experiences.
              </p>
            </div>

            {/* Transparency */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
                Transparency
              </h3>
              <p className="text-gray-600 text-sm">
                Clear pricing, honest reviews, and no hidden fees.
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm">
                Continuously improving our platform with new features.
              </p>
            </div>

            {/* Community */}
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
                Community
              </h3>
              <p className="text-gray-600 text-sm">
                Building a supportive community of owners and renters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#F8FAFC] flex justify-center py-15 px-4">
        <div className="w-full lg:w-295 flex flex-col gap-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[#FF6D3A] uppercase font-semibold italic">
              Simple Process
            </span>
            <h2 className="text-[#1E3A5F] text-4xl italic font-bold">
              How It Works
            </h2>
            <p className="text-[#64748B]">
              Get your perfect vehicle in just 3 easy steps{" "}
            </p>
          </div>
          {/* Steps Div */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            {/* Step 1 */}
            <div className="border border-solid border-[#E2E8F0] w-full lg:w-fit bg-white py-5 px-8 lg:px-18 rounded-2xl">
              <div className="flex flex-col items-center w-full lg:w-50 gap-3">
                <span className="bg-[#1E3A5F] text-white rounded-[100%] px-7 py-5 w-fit text-xl font-bold">
                  1
                </span>
                <span className="text-[#1E3A5F] text-xl italic font-bold">
                  Search
                </span>
                <p className="text-[#64748B] text-center">
                  Browse our wide selection of verified vehicles
                </p>
              </div>
            </div>

            {/* border dashed */}
            <div className="hidden lg:block border-dashed border-t-3 border-[#E2E8F0] w-15"></div>

            {/* Step 2 */}
            <div className="border border-solid border-[#E2E8F0] w-full lg:w-fit bg-white py-5 px-8 lg:px-18 rounded-2xl">
              <div className="flex flex-col items-center w-full lg:w-50 gap-3">
                <span className="bg-[#FF6D3A] text-white rounded-[100%] px-7 py-5 w-fit text-xl font-bold">
                  2
                </span>
                <span className="text-[#1E3A5F] text-xl italic font-bold">
                  Book
                </span>
                <p className="text-[#64748B] text-center">
                  Select dates & complete secure payment
                </p>
              </div>
            </div>
            {/* border dashed */}
            <div className="hidden lg:block border-dashed border-t-3 border-[#E2E8F0] w-15"></div>

            {/* Step 3 */}
            <div className="border border-solid border-[#E2E8F0] w-full lg:w-fit bg-white py-5 px-8 lg:px-18 rounded-2xl">
              <div className="flex flex-col items-center w-full lg:w-50 gap-3">
                <span className="bg-[#0EA5E9] text-white rounded-[100%] px-7 py-5 w-fit text-xl font-bold">
                  3
                </span>
                <span className="text-[#1E3A5F] text-xl italic font-bold">
                  Drive
                </span>
                <p className="text-[#64748B] text-center">
                  Pick up your vehicle and enjoy the journey!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="w-full lg:w-295 mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4 text-center italic">
            Meet Team
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A passionate student working to make vehicle rental in Nepal easier,
            safer, and more accessible.
          </p>
          <div className="flex justify-center">
            {/* Team Member 1 */}
            <div className="bg-[#F8FAFC] rounded-xl p-6 text-center shadow-md w-full lg:w-[25%]">
              <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">HD</span>
              </div>
              <h3 className="text-lg font-bold text-[#1E3A5F]">Hrita Dutta</h3>
              <p className="text-sm text-orange-500 font-semibold mb-2">
                Developer
              </p>
              <p className="text-xs text-gray-600">3rd Year Student</p>
            </div>

            {/* Team Member 2 */}
            {/* <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">SK</span>
              </div>
              <h3 className="text-lg font-bold text-[#1E3A5F]">Sita Kumari</h3>
              <p className="text-sm text-orange-500 font-semibold mb-2">CTO</p>
              <p className="text-xs text-gray-600">
                Tech expert building seamless platforms
              </p>
            </div>


            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">AD</span>
              </div>
              <h3 className="text-lg font-bold text-[#1E3A5F]">Anil Dahal</h3>
              <p className="text-sm text-orange-500 font-semibold mb-2">
                Head of Operations
              </p>
              <p className="text-xs text-gray-600">
                Ensuring smooth rental experiences
              </p>
            </div>


            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">PM</span>
              </div>
              <h3 className="text-lg font-bold text-[#1E3A5F]">Priya Magar</h3>
              <p className="text-sm text-orange-500 font-semibold mb-2">
                Customer Success
              </p>
              <p className="text-xs text-gray-600">
                Dedicated to customer satisfaction
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#1E3A5F] px-4">
        <div className="flex flex-col items-center p-12 gap-3">
          <h2 className="text-white text-3xl lg:text-[40px] italic font-bold text-center">
            Ready to Start Your Journey?{" "}
          </h2>
          <p className="text-base lg:text-[18px] text-[#94A3B8] font-light text-center">
            Join 10,000+ satisfied customers. Book your perfect ride today.{" "}
          </p>
          <div className="flex flex-col lg:flex-row gap-6 mt-3 w-full lg:w-auto">
            <button className="border-2 border-transparent bg-[#FF6D3A] py-4 px-10 text-white font-bold rounded-xl hover:bg-transparent hover:border-white transition duration-300 ease-in-out w-full lg:w-auto">
              Browse Vechicles
            </button>
            <button className="border-2 border-white bg-transparent py-4 px-10 text-white font-bold rounded-xl hover:bg-[#FF6D3A] hover:border-transparent transition duration-300 ease-in-out w-full lg:w-auto">
              List Your Vehicle
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
