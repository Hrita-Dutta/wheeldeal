import carImg from "../../public/car/test.png";

import SearchVechicle from "../components/common/SearchVehicle";
import BrowseCategory from "../components/common/BrowseCategory";
import How from "../components/common/How";
import FeaturedVechicles from "../components/common/FeaturedVechicles";
import Testimonials from "../components/common/Testimonials";
import StartJourney from "../components/common/StartJourney";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row h-full bg-[#F8FAFC] justify-center">
        <div className="flex flex-col gap-6 lg:gap-10  lg:py-30 px-21">
          <hr className="w-15 border-solid border-t-4 border-[#FF6D3A] rounded-2xl" />
          <h1 className="text-4xl lg:text-7xl font-bold text-[#1E3A5F]  leading-tight lg:leading-20 italic">
            Rent Your Perfect <br />{" "}
            <span className="text-[#FF6D3A]">Ride</span>
          </h1>
          <p className="text-gray-600">
            Discover verified vehicles for every journey. <br /> Book instantly.
            Drive confidently.{" "}
          </p>
          <button className="bg-[#FF6D3A] border text-white px-5 py-3 rounded-xl w-fit hover:bg-[white] hover:text-[#FF6D3A] hover:border hover:border-[#FF6D3A] transition duration-300 ease-in-out">
            Browse Vehicles
          </button>
        </div>
        <div className="flex justify-center items-center bg-white rounded-l-full w-550 lg:w-[105%]">
          <div className="w-[80%]">
            <img src={carImg} alt="" className="bg-cover bg-no-repeat" />
          </div>
        </div>
      </section>

      {/* Search Vechiles based on location date and type */}
      <SearchVechicle />
      {/* Browse By Category */}
      <BrowseCategory />
      {/* How it works */}
      <How />
      {/* Feature Vehicles */}
      <FeaturedVechicles />
      {/* Testimonials */}
      <Testimonials />
      {/* Ready to start you journey */}
      <StartJourney />
    </>
  );
};

export default Home;
