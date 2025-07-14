import React from "react";
import banner from "../Images/Innovation-rafiki.svg";
import { ArrowRight } from "lucide-react";
const AddBanner = () => {
  return (
    // <div className="flex h-[300px]">

    //   <div className="flex-1 h-full">demo</div>
    //   <div className="flex-1 h-full flex items-center justify-center">
    //     <img src={banner} alt="banner" width={400} />
    //   </div>
    // </div>
    <div className="relative flex overflow-hidden bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl p-8 md:p-12">
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Transform Your Business with AI
        </h2>
        <p className="text-white/90 mb-6 max-w-lg">
          Harness the power of artificial intelligence to streamline operations,
          boost productivity, and drive innovation across your organization.
        </p>
        <button className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
      <div>
        {" "}
        <img src={banner} alt="banner" width={400} />
      </div>
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/10 to-transparent" />
    </div>
  );
};

export default AddBanner;
