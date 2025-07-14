import React from "react";
import Hero from "../components/Hero";
import VirtualLab from "../components/VirtualLab";
import AditionalLab from "../components/AditionalLab";
import Vidio from "../components/Vidio";
import FeatureSec from "../components/FeatureSec";
import Progress from "../components/Progress";
import DetailsSec from "../components/DetailsSec";
import AddBanner from "../components/AddBanner";
import Herobanners from "../components/herobanners";
// import DNAViewer from "../components/3d/DNAViewer";
import banner from "../Images/banners/DIGI SIMU 22.jpg";
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
      <img src={banner2} alt="gb" />

      <FeatureSec />

      <img src={banner} alt="gb" />
      {/* <Herobanners /> */}
      {/* <Progress /> */}
    </div>
  );
};

export default Home;
