import carImg1 from "../../../public/car/test2.jpg";

const FeaturedVechicles = () => {
  return (
    <>
      <section className="flex justify-center py-10 px-4">
        <div className="w-full lg:w-295">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-8 gap-4">
            <div>
              <div className="pb-8 flex flex-col gap-3">
                <span className="text-[#FF6D3A] uppercase font-semibold ">
                  Top Picks
                </span>
                <h2 className="text-[#1E3A5F] text-4xl  font-bold">
                  Featured Vechicles
                </h2>
              </div>
            </div>
            {/* View all button */}
            <div>
              <button className="border-2 border-solid border-[#1E3A5F] bg-transparent font-semibold text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition duration-300 ease-in-out py-3 px-7 rounded-xl ">
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
                <span className="font-bold  text-xl text-[#1E3A5F]">
                  Toyota Land Cruiser
                </span>
                <p className="text-sm text-[#94A3B8]">2022 Model</p>
                <span className="text-[#1E3A5F]">Rating</span>
                <hr className="border-[#E2E8F0]" />
                <span className=" text-2xl font-bold text-[#1E3A5F]">
                  NPR Price
                </span>
              </div>
              <button className="border bg-[#1E3A5F]  font-bold text-white py-3 rounded-xl hover:bg-white hover:text-[#1E3A5F] hover:bg-border-[#1E3A5F] transition duration-450 ease-in-out">
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
                <span className="font-bold  text-xl text-[#1E3A5F]">
                  Toyota Land Cruiser
                </span>
                <p className="text-sm text-[#94A3B8]">2022 Model</p>
                <span className="text-[#1E3A5F]">Rating</span>
                <hr className="border-[#E2E8F0]" />
                <span className=" text-2xl font-bold text-[#1E3A5F]">
                  NPR Price
                </span>
              </div>
              <button className="border bg-[#1E3A5F]  font-bold text-white py-3 rounded-xl hover:bg-white hover:text-[#1E3A5F] hover:bg-border-[#1E3A5F] transition duration-450 ease-in-out">
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
                <span className="font-bold  text-xl text-[#1E3A5F]">
                  Toyota Land Cruiser
                </span>
                <p className="text-sm text-[#94A3B8]">2022 Model</p>
                <span className="text-[#1E3A5F]">Rating</span>
                <hr className="border-[#E2E8F0]" />
                <span className=" text-2xl font-bold text-[#1E3A5F]">
                  NPR Price
                </span>
              </div>
              <button className="border bg-[#1E3A5F]  font-bold text-white py-3 rounded-xl hover:bg-white hover:text-[#1E3A5F] hover:bg-border-[#1E3A5F] transition duration-450 ease-in-out">
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
                <span className="font-bold  text-xl text-[#1E3A5F]">
                  Toyota Land Cruiser
                </span>
                <p className="text-sm text-[#94A3B8]">2022 Model</p>
                <span className="text-[#1E3A5F]">Rating</span>
                <hr className="border-[#E2E8F0]" />
                <span className=" text-2xl font-bold text-[#1E3A5F]">
                  NPR Price
                </span>
              </div>
              <button className="border bg-[#1E3A5F]  font-bold text-white py-3 rounded-xl hover:bg-white hover:text-[#1E3A5F] hover:bg-border-[#1E3A5F] transition duration-450 ease-in-out">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedVechicles;
