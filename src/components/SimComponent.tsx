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

import { Data } from "../Data/Data_old"; // Import your data file
import DNAViewer from "./3d/DNAViewer";

const SimComponent = () => {
  const { id } = useParams(); // Access the 'id' parameter from the URL

  console.log(`Received ID: ${id}`);
  console.log("Data Array:", Data);

  const matchedData = Data.find((item) => item.id === parseInt(id)); // Find the data matching the ID

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
      <div className="text-center text-xl text-gray-500">
        No data found for the specified ID.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div
        className="text-white  bg-cover bg-center bg-no-repeat"
        key={matchedData.id}
        style={{
          backgroundImage: `url(${matchedData.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh", // or any specific height like '500px'
        }}
      >
        {/* {console.log(matchedData.banner)} */}
        <div className="container mx-auto px-6 py-16 flex justify-end">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {matchedData.title}
              </h1>
              <p className="text-xl text-blue-100">{matchedData.description}</p>
              <button className="relative flex justify-center items-center rounded-2xl bg-black font-montserrat shadow-md hover:shadow-lg cursor-pointer overflow-hidden border border-blue-700 group">
                <span className="text-center flex items-center w-full px-5 py-3 text-white text-lg tracking-widest z-20 transition-all duration-300 ease-in-out group-hover:text-[#183153]">
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
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            data-aos="zoom-out-right"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Beaker className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {matchedData.sec1h}
              </h2>
            </div>
            <p className="text-gray-600">{matchedData.sec1t}</p>
          </div>
          {matchedData.module3D && (
            <DNAViewer
              modelPath={matchedData.module3D}
              labelPosition={matchedData.Postion} // Optional custom label position
            />
          )}

          <div
            className="bg-white rounded-xl p-6 border border-gray-100"
            data-aos="zoom-out-left"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Flask className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {matchedData.sec2h}
              </h2>
            </div>
            <p className="text-gray-600">{matchedData.sec2t}</p>
          </div>
        </div>
      </div>

      {/* Learning Objectives */}
      <div
        className="bg-gradient-to-r from-gray-50 to-blue-50 py-12"
        data-aos="zoom-out"
      >
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {matchedData.sec3h}
              </h2>
            </div>
            {/* <ul className="space-y-3 text-gray-600">
                            {matchedData.sec3t.map((sec3t, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5"></div>
                                    {sec3t}
                                </li>
                            ))}
                        </ul> */}
            <p>{matchedData.sec3t}</p>
          </div>
        </div>
      </div>

      {/* Theoretical Background */}
      <div className="container mx-auto px-6 py-12" data-aos="zoom-out">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {matchedData.sec4t}
          </h2>
          <div className="space-y-6 text-gray-600">
            {/* {matchedData.theoreticalBackground.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))} */}
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Stages of DNA Isolation:
              </h3>
              {/* <ul className="space-y-3">
                                {matchedData.stages.map((stage, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5"></div>
                                        <span>{stage}</span>
                                    </li>
                                ))}
                            </ul> */}
              <p>{matchedData.sec4t}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Simulation Container */}
      {/* <LabSimulation /> */}
    </div>
  );
};

export default SimComponent;
