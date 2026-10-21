import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Beaker,
  FlaskRound as Flask,
  Microscope,
  BookOpen,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Helmet } from "react-helmet-async";
import { Data, Physics_Data, Chemistry_Data, Biology_Data } from "../Data/Data";
import { formatExperimentTitle, normalizeTopicSlug } from "../utils/formatExperiment";

import DNAViewer from "./3d/DNAViewer";

const TopicComponent = () => {
  const { mainCategry, topic, id } = useParams();

  const allSimulations = [
    ...Data,
    ...Physics_Data,
    ...Chemistry_Data,
    ...Biology_Data,
  ];

  const matchedData = allSimulations.find((item) => {
    if (topic) {
      if (
        formatExperimentTitle(item.title).toLowerCase() === topic.toLowerCase()
      ) {
        return true;
      }
      if (normalizeTopicSlug(item.title) === normalizeTopicSlug(topic)) {
        return true;
      }
    }
    if (id) {
      return item.id === parseInt(id);
    }
    return false;
  });

  // Animation References
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 7,
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  if (!matchedData) {
    return (
      <div className="text-center text-xl text-gray-500 py-20">
        No data found for the specified simulation.
      </div>
    );
  }

  const resolvedCategory =
    mainCategry ||
    (matchedData?.category ? matchedData.category.toLowerCase().replace(/\s+/g, "-") : "biology");
  const simulationSlug = formatExperimentTitle(matchedData.title);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{`${matchedData.title} – 3D Virtual Simulation | MantrixLab`}</title>
        <meta
          name="description"
          content={matchedData.description}
        />
        <link
          rel="canonical"
          href={`https://mantrixlab.com/simulation/${resolvedCategory}/${simulationSlug}/`}
        />
        <meta
          property="og:title"
          content={`${matchedData.title} – 3D Virtual Simulation | MantrixLab`}
        />
        <meta
          property="og:description"
          content={matchedData.description}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://mantrixlab.com/simulation/${resolvedCategory}/${simulationSlug}/`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${matchedData.title} – 3D Virtual Simulation | MantrixLab`}
        />
        <meta
          name="twitter:description"
          content={matchedData.description}
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "${matchedData.title}",
              "description": "${matchedData.description}",
              "url": "https://mantrixlab.com/simulation/${resolvedCategory}/${simulationSlug}/",
              "educationalLevel": "${matchedData.difficulty || "Beginner"}",
              "genre": "${matchedData.category || "Science"}",
              "provider": {
                "@type": "Organization",
                "name": "MantrixLab",
                "url": "https://mantrixlab.com",
                "logo": "https://mantrixlab.com/logo.png"
              }
            }
          `}
        </script>
      </Helmet>
      {/* Hero Banner *      {/* Hero Banner */}
      <div
        className="relative w-full overflow-hidden bg-black min-h-[220px] sm:min-h-[280px] md:min-h-[380px] flex items-center"
        key={matchedData.id}
      >
        <img
          src={matchedData.banner}
          alt={matchedData.title}
          className="w-full h-full min-h-[220px] sm:min-h-[280px] md:min-h-[380px] object-cover sm:object-fill"
        />

        {/* Text Layer - Responsive Overlay */}
        <div className="absolute inset-y-0 left-0 flex flex-col justify-center p-4 sm:p-6 md:p-8 w-[92%] sm:w-[75%] md:w-[60%] lg:w-[48%]">
          <h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 md:mb-4 flex flex-wrap leading-tight"
            style={{ fontFamily: "Nunito" }}
          >
            {matchedData.title.split(" ").map((word: string, i: number) => (
              <span
                key={i}
                className="inline-block whitespace-nowrap mr-2 sm:mr-3 text-black"
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="block text-xs sm:text-sm md:text-lg lg:text-xl font-semibold text-black/85 leading-snug line-clamp-3 sm:line-clamp-4 md:line-clamp-none break-words">
            {matchedData.description}
          </p>
        </div>
      </div>

      {/* 3D Model / Embed Section */}
      {matchedData?.EmbelLink && (
        <div className="sketchfab-embed-wrapper w-full px-4 sm:px-6 py-6 flex justify-center">
          <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl bg-black">
            <iframe
              title={matchedData.title}
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking="true"
              execution-while-out-of-viewport="true"
              execution-while-not-rendered="true"
              web-share="true"
              src={matchedData?.EmbelLink}
              className="w-full h-[260px] sm:h-[380px] md:h-[480px]"
            ></iframe>
          </div>
        </div>
      )}

      {/* Experiment Intro Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-gray-100">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900 break-words">
              {matchedData.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed break-words">
              {matchedData.description}
            </p>
            <div>
              <button className="relative inline-flex justify-center items-center rounded-2xl bg-black font-montserrat shadow-md hover:shadow-lg cursor-pointer overflow-hidden border border-blue-700 group">
                <span className="text-center flex items-center px-5 py-3 text-white text-sm sm:text-base tracking-wider z-20 transition-all duration-300 ease-in-out group-hover:text-[#183153] gap-2">
                  <Microscope className="h-5 w-5" />
                  Start Experiment
                </span>
                <div className="absolute top-0 right-0 h-full w-0 bg-[#ffd402] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {matchedData?.sec1h && (
            <div
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex flex-col justify-between"
              data-aos="zoom-out-right"
            >
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg shrink-0">
                    <Beaker className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 break-words">
                    {matchedData.sec1h}
                  </h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line break-words">
                  {matchedData.sec1t}
                </p>
              </div>
            </div>
          )}

          {matchedData?.module3D && (
            <DNAViewer
              modelPath={matchedData?.module3D}
              labelPosition={matchedData.Postion}
            />
          )}

          {matchedData?.sec2h && (
            <div
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex flex-col justify-between"
              data-aos="zoom-out-left"
            >
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="p-3 bg-indigo-100 rounded-lg shrink-0">
                    <Flask className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 break-words">
                    {matchedData.sec2h}
                  </h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line break-words">
                  {matchedData.sec2t}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Learning Objectives */}
      {matchedData?.sec3h && (
        <div
          className="bg-gradient-to-r from-gray-50 to-blue-50 py-8 sm:py-12"
          data-aos="zoom-out"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <div className="p-3 bg-green-100 rounded-lg shrink-0">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 break-words">
                  {matchedData.sec3h}
                </h2>
              </div>
              {Array.isArray(matchedData?.sec3t) ? (
                <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {matchedData.sec3t.map((item: any, index: number) => (
                    <li key={index} className="break-words">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line break-words">
                  {matchedData?.sec3t}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Theoretical Background / Principles */}
      {matchedData?.sec4t && (
        <div
          className="container mx-auto px-4 sm:px-6 py-8 sm:py-12"
          data-aos="zoom-out"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 break-words">
              {matchedData.sec4h || "Theoretical Background"}
            </h2>
            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line break-words">
              {matchedData.sec4t}
            </div>
          </div>
        </div>
      )}
      {/* Simulation Container */}
      {/* <LabSimulation /> */}
    </div>
  );
};

export default TopicComponent;
