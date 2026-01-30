import React from "react";

const Team = () => {
  return (
    <>
      <section className="py-16 px-4">
        <div className="w-full lg:w-295 mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4 text-center ">
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
    </>
  );
};

export default Team;
