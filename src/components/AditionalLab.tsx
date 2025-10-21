import React, { useEffect } from "react";
import {
  Play,
  BookOpen,
  Trophy,
  Microscope,
  FlaskRound as Flask,
  Atom,
  Dna,
  Telescope,
  Zap,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import img1 from "../Images/Telescope-amico.svg";
import img2 from "../Images/Science-amico.svg";
import img3 from "../Images/Learning-cuate.svg";

const additionalLabs = [
  {
    title: "Physics Lab",
    icon: <Telescope className="h-6 w-6 text-purple-600" />,
    imgs: img1,
    description: "Explore the cosmos through virtual telescopes",
  },
  {
    title: "Biology Lab",
    icon: <Dna className="h-6 w-6 text-emerald-600" />,
    imgs: img2,
    description: "Study genetics, human organs and anatomy.",
  },
  {
    title: "Chemistry Lab",
    icon: <Zap className="h-6 w-6 text-amber-600" />,
    imgs: img3,
    description: "Investigate the nature of energy and its uses",
  },
];

const AditionalLab = () => {
  useEffect(() => {
    AOS.init({
      offset: 200, // Default offset in pixels
      delay: 7, // No delay globally
      duration: 1000, // Default duration in milliseconds
      easing: "ease-in-out", // Default easing
      once: false, // Run animations every time in the viewport
      mirror: false, // No reverse animations on scroll up
    });
  }, []);

  return (
    <>
      <div>
        <section className="py-20 bg-white shadow-xl">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Specialized Laboratories
            </h2>
            <div className="grid md:grid-cols-3 gap-8" data-aos="zoom-in">
              {additionalLabs.map((lab, index) => (
                <div
                  key={index}
                  className="p-4 flex bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <div>
                    <img src={lab?.imgs} alt="logo" width={150} />
                  </div>
                  {/* <div className="bg-white p-4 rounded-full w-fit mb-4 shadow-md"> */}
                  {/* {lab.icon} */}
                  {/* </div> */}

                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {lab.title}
                    </h3>
                    <p className="text-gray-600">{lab.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AditionalLab;
