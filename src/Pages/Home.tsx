import React from "react";
import Hero from "../components/Hero";
import VirtualLab from "../components/VirtualLab";
import AditionalLab from "../components/AditionalLab";
import Vidio from "../components/Vidio";
import FeatureSec from "../components/FeatureSec";

import DetailsSec from "../components/DetailsSec";

// import DNAViewer from "../components/3d/DNAViewer";
import banner from "../Images/banners/DIGI_SIMU_Growth_23.jpg";
import banner2 from "../Images/banners/DIGI SIMU 4.jpg";
const Home = () => {
  return (
    <div>
      {/* <DNAViewer
        modelPath="/deltoids.glb"
        labelPosition={[0, 1.5, 0]} // Optional custom label position
      /> */}
      <Hero />
      <DetailsSec />
      <VirtualLab />
      <AditionalLab />
      <Vidio />
      {/* <AddBanner /> */}
      <div className="w-full h-auto  flex items-center justify-center ">
        <img src={banner2} alt="gb" className="w-full h-auto " />
      </div>

      <FeatureSec />
      <div className="w-full h-auto flex items-center justify-center ">
        <img src={banner} alt="gb" className="w-full h-auto " />
      </div>
      {/* <Herobanners /> */}
      {/* <Progress /> */}
    </div>
  );
};

export default Home;
