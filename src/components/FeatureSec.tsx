import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const Data = [
  {
    id: 1,
    icon: "Play",
    heading: "Interactive Simulations",
    pre: "Experience hands-on learning through our advanced virtual simulations platform",
  },
  {
    id: 2,
    icon: "BookOpen",
    heading: "Comprehensive Content",
    pre: "Access a wide range of educational materials curated by expert educators",
  },
  {
    id: 3,
    icon: "Trophy",
    heading: "Progress Tracking",
    pre: "Monitor your learning journey with detailed analytics and personalized feedback",
  },
  {
    id: 4,
    icon: "Microscope",
    heading: "Progress Tracking",
    pre: "Monitor your learning journey with detailed analytics and personalized feedback",
  },
  {
    id: 5,
    icon: "Flask",
    heading: "Progress Tracking",
    pre: "Monitor your learning journey with detailed analytics and personalized feedback",
  },
  {
    id: 6,
    icon: "Atom",
    heading: "Progress Tracking",
    pre: "Monitor your learning journey with detailed analytics and personalized feedback",
  },
];

// Mapping for icon components
const iconMap = {
  Play,
  BookOpen,
  Trophy,
  Microscope,
  Flask,
  Atom,
  Dna,
  Telescope,
  Zap,
};

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile landscape
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Mobile portrait
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-16 ">
        <div className=" mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Why Choose Our Platform
          </h2>

          <div className="slider-container gap-3 ">
            <Slider {...settings}>
              {Data.map((item) => {
                const IconComponent = iconMap[item.icon]; // Match icon name to component
                return (
                  <div className="px-6">
                    <div
                      key={item.id}
                      className="p-8 w-80 bg-blue-400/10  rounded-2xl border border-white  shadow-lg hover:shadow-2xl transition-shadow"
                    >
                      <IconComponent className="h-12 w-12 mb-6" />
                      <h3 className="text-xl font-bold mb-4">{item.heading}</h3>
                      <p className=" overflow-hidden">{item.pre}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default AutoPlay;
