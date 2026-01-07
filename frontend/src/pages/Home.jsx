import React from "react";
import carImg from "../../public/car/test.png";
import tour from "../../public/category/tour.jpg";
import carImg1 from "../../public/car/test2.jpg";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className=" flex h-full ">
        <div className="flex flex-col gap-10 p-30">
          <hr className="w-15 border-solid border-t-4 border-[#FF6D3A] rounded-2xl" />
          <h1 className=" text-7xl font-bold text-[#1E3A5F] italic leading-20">
            Rent Your Perfect <br />{" "}
            <span className="text-[#FF6D3A]">Ride</span>
          </h1>
          <p className="text-gray-600">
            Discover verified vehicles for every journey. <br /> Book instantly.
            Drive confidently.{" "}
          </p>
          <button className="bg-[#FF6D3A] border text-white px-5 py-3 rounded-xl w-fit hover:bg-[white] hover:text-[#FF6D3A] hover:border hover:border-[#FF6D3A] transition duration-300 ease-in-out ">
            Browse Vehicles
          </button>
        </div>
        <div className="flex justify-center items-center bg-[#F8FAFC] rounded-l-full w-[105%]">
          <div className="w-[80%]">
            <img src={carImg} alt="" className=" bg-cover bg-no-repeat" />
          </div>
        </div>
      </section>

      {/* Search Vechiles based on location date and type */}
      <section className=" bg-[#1E3A5F] flex justify-center">
        <div className=" py-8 w-fit">
          <div className="flex  bg-white rounded-2xl">
            <form action="" className="flex px-10 py-5 gap-5 items-center">
              {/* Pickup Location */}
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[#94A3B8]">
                  Pickup Location
                </label>
                <input
                  type="text"
                  placeholder="Select City"
                  className="bg-[#F8FAFC] px-5 py-3 rounded-2xl"
                />
              </div>
              <div className=" border-l h-12 border-[#E2E8F0]"></div>
              {/* Pickup Date */}
              <div className="flex flex-col gap-2">
                <label className="text-[#94A3B8]" htmlFor="">
                  Pickup Date
                </label>
                <input
                  className="bg-[#F8FAFC] px-5 py-3 rounded-2xl"
                  type="date"
                  placeholder="Select date"
                />
              </div>
              <div className=" border-l h-12 border-[#E2E8F0]"></div>
              {/* Return Date */}
              <div className="flex flex-col gap-2">
                <label className="text-[#94A3B8]" htmlFor="">
                  Return Date
                </label>
                <input
                  className="bg-[#F8FAFC] px-5 py-3 rounded-2xl"
                  type="date"
                  placeholder="Select date"
                />
              </div>
              <div className=" border-l h-12 border-[#E2E8F0]"></div>
              {/* Vechicle Type */}
              <div className="flex flex-col gap-2">
                <label className="text-[#94A3B8]" htmlFor="">
                  Vehicle Type
                </label>
                <select
                  className="bg-[#F8FAFC] px-5 py-3 rounded-2xl"
                  name=""
                  id=""
                >
                  <option value="">--- Select Vehicle ---</option>
                  <option value="">Jeep</option>
                  <option value="">Car</option>
                  <option value="">Bike</option>
                  <option value="">Bus</option>
                </select>
              </div>
              {/* Button */}
              <button className="bg-[#FF6D3A] border text-white px-5 py-3 rounded-xl w-fit hover:bg-[white] hover:text-[#FF6D3A] hover:border hover:border-[#FF6D3A] transition duration-300 ease-in-out ">
                Search Vehicles
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Browse By Category */}
      <section className="flex justify-center py-15">
        <div className="w-295">
          <div className="pb-8 flex flex-col gap-3">
            <span className="text-[#FF6D3A] uppercase font-semibold italic">
              Explore
            </span>
            <h2 className="text-[#1E3A5F] text-4xl italic font-bold">
              Browse by Category
            </h2>
            <p className="text-[#64748B]">
              Find the perfect vehicle for every occasion{" "}
            </p>
          </div>
          {/* Explore category */}
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="border border-solid border-[#E2E8F0] w-fit p-5  rounded-2xl flex flex-col gap-3">
              <img
                src={tour}
                width={200}
                alt=""
                className=" bg-cover bg-no-repeat rounded-2xl"
              />
              <span className=" text-lg font-bold italic">Category</span>
              <span className=" text-[#94A3B8]">40 vehicles</span>
              <button className="w-fit bg-[#fad9cd] text-[#FF6D3A] font-semibold italic px-5 py-2 rounded-lg hover:text-[#fad9cd] hover:bg-[#FF5D3A] transition duration-300 ease-in-out">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#F8FAFC] flex justify-center py-15 ">
        <div className="w-295 flex flex-col gap-10">
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
          {/* Step 1 */}
          <div className="flex items-center">
            <div className="border border-solid border-[#E2E8F0] w-fit bg-white py-5 px-18 rounded-2xl">
              <div className="flex flex-col items-center w-50 gap-3">
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
            <div className=" border-dashed border-t-3 border-[#E2E8F0] w-15"></div>

            {/* Step 2 */}
            <div className="border border-solid border-[#E2E8F0] w-fit bg-white py-5 px-18 rounded-2xl">
              <div className="flex flex-col items-center w-50 gap-3">
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
            <div className=" border-dashed border-t-3 border-[#E2E8F0] w-15"></div>

            {/* Step 3 */}
            <div className="border border-solid border-[#E2E8F0] w-fit bg-white py-5 px-18 rounded-2xl">
              <div className="flex flex-col items-center w-50 gap-3">
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

      {/* Feature Vehicles */}
      <section className="flex justify-center py-10">
        <div className="w-295">
          {/* Top Section */}
          <div className="flex justify-between items-center py-8">
            <div>
              <div className="pb-8 flex flex-col gap-3">
                <span className="text-[#FF6D3A] uppercase font-semibold italic">
                  Top Picks
                </span>
                <h2 className="text-[#1E3A5F] text-4xl italic font-bold">
                  Featured Vechicles
                </h2>
              </div>
            </div>
            {/* View all button */}
            <div>
              <button className="border-2 border-solid border-[#1E3A5F] bg-transparent font-semibold text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition duration-300 ease-in-out py-3 px-7 rounded-xl italic">
                View All
              </button>
            </div>
          </div>
          {/* Another Section */}
          <div className="flex flex-wrap justify-center gap-7">
            <div className="border border-[#E2E8F0] w-fit rounded-2xl p-4 flex flex-col">
              <img
                src={carImg1}
                alt=""
                width={240}
                className="border rounded-2xl"
              />
              <div className="flex flex-col gap-1 p-3">
                <span className="font-bold italic text-xl text-[#1E3A5F]">
                  Toyota Land Cruiser
                </span>
                <p className="text-sm text-[#94A3B8]">2022 Model</p>
                <span className="text-[#1E3A5F]">Rating</span>
                <hr className="border-[#E2E8F0]" />
                <span className="italic text-2xl font-bold text-[#1E3A5F]">
                  NPR Price
                </span>
              </div>
              <button className="border bg-[#1E3A5F] italic font-bold text-white py-3 rounded-xl hover:bg-white hover:text-[#1E3A5F] hover:bg-border-[#1E3A5F] transition duration-450 ease-in-out">
                View Details
              </button>
            </div>
            {/* replicas */}
            <div className="border border-[#E2E8F0] w-fit rounded-2xl p-4 flex flex-col">
              <img
                src={carImg1}
                alt=""
                width={240}
                className="border rounded-2xl"
              />
              <div className="flex flex-col gap-1 p-3">
                <span className="font-bold italic text-xl text-[#1E3A5F]">
                  Toyota Land Cruiser
                </span>
                <p className="text-sm text-[#94A3B8]">2022 Model</p>
                <span className="text-[#1E3A5F]">Rating</span>
                <hr className="border-[#E2E8F0]" />
                <span className="italic text-2xl font-bold text-[#1E3A5F]">
                  NPR Price
                </span>
              </div>
              <button className="border bg-[#1E3A5F] italic font-bold text-white py-3 rounded-xl hover:bg-white hover:text-[#1E3A5F] hover:bg-border-[#1E3A5F] transition duration-450 ease-in-out">
                View Details
              </button>
            </div>
            <div className="border border-[#E2E8F0] w-fit rounded-2xl p-4 flex flex-col">
              <img
                src={carImg1}
                alt=""
                width={240}
                className="border rounded-2xl"
              />
              <div className="flex flex-col gap-1 p-3">
                <span className="font-bold italic text-xl text-[#1E3A5F]">
                  Toyota Land Cruiser
                </span>
                <p className="text-sm text-[#94A3B8]">2022 Model</p>
                <span className="text-[#1E3A5F]">Rating</span>
                <hr className="border-[#E2E8F0]" />
                <span className="italic text-2xl font-bold text-[#1E3A5F]">
                  NPR Price
                </span>
              </div>
              <button className="border bg-[#1E3A5F] italic font-bold text-white py-3 rounded-xl hover:bg-white hover:text-[#1E3A5F] hover:bg-border-[#1E3A5F] transition duration-450 ease-in-out">
                View Details
              </button>
            </div>
            <div className="border border-[#E2E8F0] w-fit rounded-2xl p-4 flex flex-col">
              <img
                src={carImg1}
                alt=""
                width={240}
                className="border rounded-2xl"
              />
              <div className="flex flex-col gap-1 p-3">
                <span className="font-bold italic text-xl text-[#1E3A5F]">
                  Toyota Land Cruiser
                </span>
                <p className="text-sm text-[#94A3B8]">2022 Model</p>
                <span className="text-[#1E3A5F]">Rating</span>
                <hr className="border-[#E2E8F0]" />
                <span className="italic text-2xl font-bold text-[#1E3A5F]">
                  NPR Price
                </span>
              </div>
              <button className="border bg-[#1E3A5F] italic font-bold text-white py-3 rounded-xl hover:bg-white hover:text-[#1E3A5F] hover:bg-border-[#1E3A5F] transition duration-450 ease-in-out">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F8FAFC] flex flex-col items-center py-8">
        <div className="w-295">
          {/* Top Section */}
          <div className="text-center py-5">
            <span className="text-sm font-bold uppercase text-[#FF6D3A] italic">
              Testimonials
            </span>
            <h2 className="text-4xl italic font-bold text-[#1E3A5F] pb-8">
              What customers Say
            </h2>
          </div>
          {/* Card Section */}
          <div className="flex justify-between">
            <div className=" rounded-2xl bg-white p-5 w-[31%]">
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
                  <div className="flex flex-col ">
                    <span className="text-sm font-bold italic text-[#1E3A5F]">
                      Hari Bahadur
                    </span>
                    <span className="text-xs text-[#94A3B8]">Kathmandu</span>
                  </div>
                </div>
                <span>rating</span>
              </div>
            </div>
            {/* replica */}
            <div className=" rounded-2xl bg-white p-5 w-[31%]">
              {/* Card Paragraph Section */}
              <p className="p-3 font-light ">
                WheelDeal made our family trip so easy! Highly recommended
                service.
              </p>
              {/* Card Person name section */}
              <div className="flex justify-between pt-8 items-center">
                <div className="flex gap-3 items-center">
                  <span className="px-2 py-3 text-white rounded-[100%] bg-[#1E3A5F]">
                    Logo
                  </span>
                  <div className="flex flex-col ">
                    <span className="text-sm font-bold italic text-[#1E3A5F]">
                      Hari Bahadur
                    </span>
                    <span className="text-xs text-[#94A3B8]">Kathmandu</span>
                  </div>
                </div>
                <span>rating</span>
              </div>
            </div>
            <div className=" rounded-2xl bg-white p-5 w-[31%]">
              {/* Card Paragraph Section */}
              <p className="p-3 font-light ">
                WheelDeal made our family trip so easy! Highly recommended
                service.
              </p>
              {/* Card Person name section */}
              <div className="flex justify-between pt-8 items-center">
                <div className="flex gap-3 items-center">
                  <span className="px-2 py-3 text-white rounded-[100%] bg-[#1E3A5F]">
                    Logo
                  </span>
                  <div className="flex flex-col ">
                    <span className="text-sm font-bold italic text-[#1E3A5F]">
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

      {/* Ready to start you journey */}
      <section className="bg-[#1E3A5F]">
        <div className="flex flex-col items-center p-12 gap-3">
          <h2 className="text-white text-[40px] italic font-bold">
            Ready to Start Your Journey?{" "}
          </h2>
          <p className="text-[18px] text-[#94A3B8] font-light">
            Join 10,000+ satisfied customers. Book your perfect ride today.{" "}
          </p>
          <div className="flex gap-6 mt-3">
            <button className="border-2 border-transparent bg-[#FF6D3A] py-4 px-10 text-white font-bold rounded-xl hover:bg-transparent hover:border-white transition duration-300 ease-in-out">
              Browse Vechicles
            </button>
            <button className="border-2 border-white bg-transparent py-4 px-10 text-white font-bold rounded-xl hover:bg-[#FF6D3A] hover:border-transparent transition duration-300 ease-in-out">
              List Your Vehicle
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
