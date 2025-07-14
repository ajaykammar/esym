import React from "react";
import ThreeJSTitle from "./ThreeJSTitle";
import { NavLink } from "react-router-dom";
import { Data } from "../Data/Data";

// Define the type for each simulation item
interface SimulationItem {
  id: string | number;
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Physics: React.FC = () => {
  return (
    <>
      <div className="sketchfab-embed-wrapper">
        <iframe
          title="DC motor generator"
          frameBorder="0"
          allowFullScreen
          mozAllowFullScreen="true"
          webkitAllowFullScreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
          src="https://sketchfab.com/models/d9454ef2fde9415fbcb3aaeedb8f4880/embed"
          width="100%"
          height="480"
        ></iframe>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "normal",
            margin: "5px",
            color: "#4A4A4A",
          }}
        >
          <a
            href="https://sketchfab.com/3d-models/dc-motor-generator-d9454ef2fde9415fbcb3aaeedb8f4880?utm_medium=embed&utm_campaign=share-popup&utm_content=d9454ef2fde9415fbcb3aaeedb8f4880"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            DC motor generator
          </a>{" "}
          by{" "}
          <a
            href="https://sketchfab.com/thakoor64?utm_medium=embed&utm_campaign=share-popup&utm_content=d9454ef2fde9415fbcb3aaeedb8f4880"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            thakoor64
          </a>{" "}
          on{" "}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=d9454ef2fde9415fbcb3aaeedb8f4880"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Sketchfab
          </a>
        </p>
      </div>

      {/* Simulations Grid */}
      <div className="mx-auto p-12 pb-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Data &&
            Data?.map((simulation: SimulationItem) => {
              const Icon = simulation.icon;
              return (
                <div
                  key={simulation.id}
                  className="group relative bg-black bg-opacity-80 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src={simulation.image}
                      alt={simulation.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-md text-white">
                        {simulation.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 z-20">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 backdrop-blur-md text-blue-200">
                        {simulation.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
                        <Icon className="h-6 w-6 text-blue-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 h-14">
                          {simulation.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed h-20">
                          {simulation.description}
                        </p>
                      </div>
                    </div>

                    <div className="relative group mx-auto flex items-center justify-center">
                      <div className="absolute bottom-0 w-[45px] h-[45px] bg-[#3c555d] rounded-full transition-all duration-600 group-hover:w-1/2 group-hover:bg-[#b1dae7]"></div>
                      <NavLink
                        to={`/simulation/${simulation.id}`}
                        className="relative z-10 p-3 flex items-center space-x-2 text-[#234567] font-bold text-lg tracking-wide active:scale-95 transition-all duration-300"
                      >
                        <span>Start</span>
                        <svg
                          className="w-[15px] h-[10px] translate-x-[-5px] transition-transform duration-300 group-hover:translate-x-0"
                          viewBox="0 0 13 10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1,5 L11,5"
                            stroke="#234567"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          ></path>
                          <polyline
                            points="8 1 12 5 8 9"
                            stroke="#234567"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          ></polyline>
                        </svg>
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <style>
        {`
          @keyframes scaleUp {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(0.95);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </>
  );
};

export default Physics;
