import React from "react";

const CoreValues = () => {
  return (
    <>
      <section className="py-16 bg-white ">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Trust */}
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Trust</h3>
              <p className="text-gray-600 text-sm">
                We verify every vehicle and user to ensure safe, reliable
                experiences.
              </p>
            </div>

            {/* Transparency */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
                Transparency
              </h3>
              <p className="text-gray-600 text-sm">
                Clear pricing, honest reviews, and no hidden fees.
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm">
                Continuously improving our platform with new features.
              </p>
            </div>

            {/* Community */}
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
                Community
              </h3>
              <p className="text-gray-600 text-sm">
                Building a supportive community of owners and renters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreValues;
