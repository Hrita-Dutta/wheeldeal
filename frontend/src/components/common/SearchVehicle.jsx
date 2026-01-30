import React from "react";

const SearchVechicle = () => {
  return (
    <>
      <section className="bg-[#1E3A5F] flex justify-center px-4">
        <div className="py-8 w-full lg:container">
          <div className="flex bg-white rounded-2xl">
            <form
              action=""
              className="flex flex-col  lg:flex-row px-4 lg:px-10 py-5 gap-5 items-center w-full justify-center"
            >
              {/* Pickup Location */}
              <div className="flex flex-col gap-2 w-full lg:w-auto">
                <label htmlFor="" className="text-[#94A3B8]">
                  Pickup Location
                </label>
                <input
                  type="text"
                  placeholder="Select City"
                  className="bg-[#F8FAFC] px-5 py-3 rounded-2xl w-full"
                />
              </div>
              <div className="hidden lg:block border-l h-12 border-[#E2E8F0]"></div>
              {/* Pickup Date */}
              <div className="flex flex-col gap-2 w-full lg:w-auto">
                <label className="text-[#94A3B8]" htmlFor="">
                  Pickup Date
                </label>
                <input
                  className="bg-[#F8FAFC] px-5 py-3 rounded-2xl w-full"
                  type="date"
                  placeholder="Select date"
                />
              </div>
              <div className="hidden lg:block border-l h-12 border-[#E2E8F0]"></div>
              {/* Return Date */}
              <div className="flex flex-col gap-2 w-full lg:w-auto">
                <label className="text-[#94A3B8]" htmlFor="">
                  Return Date
                </label>
                <input
                  className="bg-[#F8FAFC] px-5 py-3 rounded-2xl w-full"
                  type="date"
                  placeholder="Select date"
                />
              </div>
              <div className="hidden lg:block border-l h-12 border-[#E2E8F0]"></div>
              {/* Vechicle Type */}
              <div className="flex flex-col gap-2 w-full lg:w-auto">
                <label className="text-[#94A3B8]" htmlFor="">
                  Vehicle Type
                </label>
                <select
                  className="bg-[#F8FAFC] px-5 py-3 rounded-2xl w-full"
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
              <button className="bg-[#FF6D3A] border text-white px-5 py-3 rounded-xl w-full lg:w-fit hover:bg-[white] hover:text-[#FF6D3A] hover:border hover:border-[#FF6D3A] transition duration-300 ease-in-out">
                Search Vehicles
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchVechicle;
