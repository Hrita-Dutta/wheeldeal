import carImg1 from "../../../public/car/test2.jpg";
import VehicleCard from "../widgets/VehicleCard";

const FeaturedVechicles = () => {
  return (
    <>
      <section className="flex justify-center py-10 px-4">
        <div className="w-full lg:container">
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
          <div className="flex flex-wrap  justify-between gap-5">
            {/* replicas */}
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedVechicles;
