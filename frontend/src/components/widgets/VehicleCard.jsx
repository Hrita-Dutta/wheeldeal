import carImg1 from "../../../public/car/test2.jpg";

const VehicleCard = () => {
  return (
    <>
      <div className="border border-[#E2E8F0] w-[23%] my-3 rounded-2xl p-4 flex flex-col">
        <div className="flex justify-center">
          <img src={carImg1} alt="" className="border rounded-2xl w-[95%] " />
        </div>
        <div className="flex flex-col gap-1 p-3">
          <span className="font-bold  text-xl text-[#1E3A5F]">
            Toyota Land Cruiser
          </span>
          <p className="text-sm text-[#94A3B8]">2022 Model</p>
          <span className="text-[#1E3A5F]">Rating</span>
          <hr className="border-[#E2E8F0]" />
          <span className=" text-2xl font-bold text-[#1E3A5F]">NPR Price</span>
        </div>
        <button className="border bg-[#1E3A5F]  font-bold text-white py-3 rounded-xl hover:bg-white hover:text-[#1E3A5F] hover:bg-border-[#1E3A5F] transition duration-450 ease-in-out">
          View Details
        </button>
      </div>
    </>
  );
};

export default VehicleCard;
