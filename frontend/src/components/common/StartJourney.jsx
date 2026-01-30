import React from "react";

const StartJourney = () => {
  return (
    <>
      <section className="bg-[#1E3A5F]">
        <div className="flex flex-col items-center p-12 gap-3">
          <h2 className="text-white text-3xl lg:text-[40px]  font-bold text-center">
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
    </>
  );
};

export default StartJourney;
