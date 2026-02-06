import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

import banner2 from "../Images/DNA_banner_1.png";
import banner1 from "../Images/DNA_banner_2.png";
import banner4 from "../Images/DNA_banner_3.png";

const Hero = () => {
  const slides = [
    {
      id: 12,
      img: banner2,
      title: "3D Models Biology",
      caption: "Enhances engagement with gamified and immersive content.",
    },
    {
      id: 11,
      img: banner1,
      title: "3D Models Biology",
      caption: "Enhances engagement with gamified and immersive content.",
    },
    // You can add more slides here
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-auto overflow-hidden bg-black">
      {/* Slider */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <Slide key={slide.id} slide={slide} active={i === index} />
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black transition"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black transition"
      >
        ❯
      </button>
    </div>
  );
};

const Slide = ({ slide, active }) => {
  const titleRef = useRef(null);
  const captionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const letters = titleRef.current.querySelectorAll("span");

    const tl = gsap.timeline();

    // Reset state
    gsap.set([letters, captionRef.current], { opacity: 0 });

    // Background slow zoom
    gsap.fromTo(
      imageRef.current,
      { scale: 1.15 },
      { scale: 1, duration: 6, ease: "power2.out" },
    );

    // Title animation (cinematic)
    tl.fromTo(
      letters,
      { y: 80, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.05,
        duration: 1.2,
        ease: "power4.out",
      },
    )

      // Caption animation
      .fromTo(
        captionRef.current,
        { y: 40, opacity: 0, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4",
      );

    return () => tl.kill();
  }, [active]);

  return (
    <div className="w-full h-auto flex-shrink-0 relative overflow-hidden">
      <img
        ref={imageRef}
        src={slide.img}
        alt={slide.title}
        className="w-full h-auto object-fill"
      />

      {/* Text Layer */}
      <div className="absolute top-[20%] left-0 h-full pt-10 p-6 w-[40%]">
        <h2
          ref={titleRef}
          className="md:text-8xl font-bold mb-4 flex flex-wrap"
          style={{ fontFamily: "Nunito" }}
        >
          {slide.title.split("").map((char, i) => (
            <span key={i} className="inline-block text-black">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>

        <p ref={captionRef} className="text-xs  md:text-3xl font-semibold">
          {slide.caption}
        </p>
      </div>
    </div>
  );
};

export default Hero;
