import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero";
import VirtualLab from "../components/VirtualLab";
import AditionalLab from "../components/AditionalLab";
import Vidio from "../components/Vidio";
import FeatureSec from "../components/FeatureSec";
import DetailsSec from "../components/DetailsSec";

import banner from "../Images/banners/DIGI_SIMU_Growth_23.jpg";
import banner2 from "../Images/banners/DIGI SIMU 4.jpg";

const Home = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mantrixlab",
    url: "https://www.mantrixlab.com",
    logo: "https://www.mantrixlab.com/logo.png",
  };

  return (
    <div>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <Hero />
      <DetailsSec />
      <VirtualLab />
      <AditionalLab />
      <Vidio />

      <div className="w-full h-auto flex items-center justify-center">
        <img src={banner2} alt="Mantrixlab Banner" className="w-full h-auto" />
      </div>

      <FeatureSec />

      <div className="w-full h-auto flex items-center justify-center">
        <img
          src={banner}
          alt="Mantrixlab Growth Banner"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Home;
