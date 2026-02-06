import React from "react";
import { Link } from "react-router-dom";

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
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              3D Vartual Labs
            </h2>
            <p className="text-gray-600 mb-4">
              Experience interactive science and engineering experiments in a
              realistic 3D environment. Our 3D Virtual Labs allow learners to
              explore, simulate, and understand complex concepts safely and
              efficiently—anytime, anywhere. Designed for education, training,
              and innovation, these labs bring hands-on learning to the digital
              world.
            </p>
            <div className="flex justify-center gap-4">
              <button className="relative flex justify-center items-center rounded-2xl bg-black font-montserrat shadow-md hover:shadow-lg cursor-pointer overflow-hidden border-none group">
                <span className="text-center w-full px-5 py-3 text-white text-lg  tracking-widest z-20 transition-all duration-300 ease-in-out group-hover:text-[#183153]">
                  <Link to={"/virtuallabs"}>Start</Link>
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
