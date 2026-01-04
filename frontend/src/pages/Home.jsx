import React from "react";
import carImg from "../../public/car/test.png";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className=" flex h-full ">
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
      </div>

      {/* Search Vechiles based on location date and type */}
      <div className=" bg-[#1E3A5F] flex justify-center">
        <div className="container py-8 w-fit">
          <div className="flex  bg-white rounded-2xl">
            <form action="" className="flex px-8 py-5 gap-3 items-center">
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
      </div>
    </>
  );
};

export default Home;
