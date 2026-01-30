import React from "react";

const FollowUs = () => {
  return (
    <>
      <section className="flex justify-center py-10 px-4">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 w-full lg:w-295">
          <h3 className="text-3xl font-bold text-blue-900 mb-4 ">Follow Us</h3>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white text-xl transition-colors"
            >
              f
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center text-white text-xl transition-colors"
            >
              𝕏
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center text-white text-xl transition-colors"
            >
              in
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center text-white text-xl transition-colors"
            >
              📷
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FollowUs;
