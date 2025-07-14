import React from "react";

const DetailsSec = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className=" p-4 py-10">
        <div className="flex flex-col md:flex-row bg-blue-50 shadow-sm rounded-lg overflow-hidden">
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/d1fd59f3-583e-4dbe-8055-e2e9671a5e9c_scaled.jpg"
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section - Details */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Section Title</h2>
            <p className="text-gray-600 mb-4">
              This is the details section. You can add any content here, such as descriptions,
              features, or any other information you want to display. Tailwind CSS makes styling
              easy and efficient.
            </p>
            <div className="flex justify-center gap-4">
              <button className="relative flex justify-center items-center rounded-2xl bg-black font-montserrat shadow-md hover:shadow-lg cursor-pointer overflow-hidden border-none group">
                <span className="text-center w-full px-5 py-3 text-white text-lg  tracking-widest z-20 transition-all duration-300 ease-in-out group-hover:text-[#183153]">
                  Start
                </span>
                <div className="absolute top-0 right-0 h-full w-0 bg-[#ffd402] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSec;