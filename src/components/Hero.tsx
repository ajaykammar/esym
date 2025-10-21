import React, { useState, useEffect } from "react";
// import banner2 from "../Images/banners/DIGI SIMU 4.jpg";
import banner2 from "../Images/DNA_banner_1.png";
import banner1 from "../Images/DNA_banner_2.png";
import banner4 from "../Images/DNA_banner_3.png";
// import banner3 from "../Images/Flux_Dev_Create_a_highresolution_digital_image_with_a_width_of_0.jpg";
const Hero = () => {
  const slides = [
    // {
    //   id: 13,
    //   img: banner3,
    //   title: "",
    //   caption: "",
    // },
    {
      id: 12,
      img: banner2,
      title: "",
      caption: "",
    },
    {
      id: 11,
      img: banner1,
      title: "",
      caption: "",
    },
    {
      id: 3,
      img: banner4,
      title: "",
      caption: "",
    },
    // {
    //   id: 1,
    //   img: "https://images.cms3.my.labster.com/images/RCM_2.jpg",
    //   title: "Explore the World of Chemistry",
    //   caption: '"Chemistry is the study of Transformation"',
    // },
    // {
    //   id: 2,
    //   img: "https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/d1fd59f3-583e-4dbe-8055-e2e9671a5e9c_scaled.jpg",
    //   title: "Physics in Motion",
    //   caption: '"Understanding forces through simulations"',
    // },
    // {
    //   id: 3,
    //   img: "https://praxilabs.com/Uploads/Experiment/Flame%20test%2016_14_2022_11_44_06_AM.png",
    //   title: "Flame Test Experiment",
    //   caption: '"Discover elements through their colors"',
    // },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Increased time for smoother transition
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-auto overflow-hidden bg-black">
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-auto flex-shrink-0 relative">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-auto object-fill"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
              <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg italic">{slide.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all"
        onClick={prevSlide}
      >
        ❮
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default Hero;
