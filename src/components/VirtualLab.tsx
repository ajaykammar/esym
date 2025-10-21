import React, { useEffect } from "react";
import { Microscope, FlaskRound as Flask, Atom } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import RotatingText from "../RoutingText/RoutingText";
import { Link } from "react-router-dom";

const virtualLabs = [
  {
    title: "Physics Virtual Lab",
    description:
      "Explore mechanics, waves, and quantum physics through interactive 3D simulations. Conduct experiments in mechanics, optics, and electromagnetism.",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa",
    icon: <Atom className="h-8 w-8" />,
    features: ["Quantum Mechanics", "Wave Optics", "Electromagnetism"],
    link: "/physics",
  },
  {
    title: "Chemistry Lab",
    description:
      "Conduct virtual experiments with molecular structures and reactions. Study organic compounds and chemical reactions in a safe environment.",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6",
    icon: <Flask className="h-8 w-8" />,
    features: ["Molecular Modeling", "Reaction Kinetics", "Spectroscopy"],
    link: "Chemistry",
  },
  {
    title: "Biology Lab",
    description:
      "Study cellular structures and biological processes in 3D. Explore DNA replication, cell division, and protein synthesis.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557",
    icon: <Microscope className="h-8 w-8" />,
    features: ["Cell Biology", "Genetics", "Physiology"],
    link: "biology",
  },
];

const VirtualLab = () => {
  useEffect(() => {
    AOS.init({
      offset: 100, // Default offset in pixels
      delay: 1, // No delay globally
      duration: 1000, // Default duration in milliseconds
      easing: "ease-in-out", // Default easing
      once: false, // Run animations every time in the viewport
      mirror: false, // No reverse animations on scroll up
    });
  }, []);

  return (
    <>
      <div>
        {/* Virtual Labs Banner Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-50 ">
          <div className="container mx-auto px-6">
            <div className="flex gap-2 justify-center items-center content-center mb-10">
              <h2 className="text-4xl font-bold text-center text-black ">
                Virtual Labs
              </h2>
              <RotatingText
                texts={["Physics", "Chemistry", `Biology`]}
                mainClassName="px-2 sm:px-2 md:px-3  text-3xl font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg border-2 border-blue-300 bg-blue-200"
                staggerFrom={"first"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={4000}
              />
            </div>
            <div className="grid md:grid-cols-3 gap-12" data-aos="zoom-in">
              {virtualLabs.map((lab, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-56">
                    <img
                      src={lab.image}
                      alt={lab.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white p-3 rounded-xl shadow-lg">
                      {lab.icon}
                    </div>
                  </div>
                  <div className="px-5 flex-grow">
                    <h3 className="text-2xl font-bold my-1 text-gray-800">
                      {lab.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{lab.description}</p>
                    <div className="mb-1">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {lab.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 p-8 pt-0">
                    <button className="relative flex justify-center items-center rounded-2xl bg-black font-montserrat shadow-md hover:shadow-lg cursor-pointer overflow-hidden border-none group">
                      <span className="text-center w-full px-4  text-white text-md  tracking-widest z-20 transition-all duration-300 ease-in-out group-hover:text-[#183153]">
                        <Link to={lab.link}>Start</Link>
                      </span>
                      <div className="absolute top-0 right-0 h-full w-0 bg-[#ffd402] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></div>
                    </button>
                  </div>

                  {/* Button Code */}
                  {/* <div className="relative group mx-auto flex items-center justify-center mb-3 mt-[-2]">
                    <div className="absolute bottom-0 w-[45px] h-[45px] bg-[#679ee6] rounded-full transition-all duration-600 group-hover:w-full group-hover:bg-[#4589c1]"></div>

                    <a href="#"
                      // to={`/simulation/${simulation.id}`}
                      className="relative z-10 p-3 flex items-center space-x-2 text-[#234567] hover:text-white font-bold text-lg tracking-wide active:scale-95 transition-all duration-300"
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                        ></path>
                        <polyline
                          points="8 1 12 5 8 9"
                          stroke="#234567"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                        ></polyline>
                      </svg>
                    </a>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </section>
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

export default VirtualLab;
