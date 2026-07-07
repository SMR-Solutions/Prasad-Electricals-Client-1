"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

export default function Portfolio() {
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    "/Working1.jpg",
    "/working2.jpg",
    "/work1.jpg",
    "/work2.jpg",
    "/work3.jpg",
    "/work4.jpg",
    "/work5.jpg",
    "/Electrician.jpg",
    "/Tools-arrangement.jpg",
  ];

  // A helper function to create varied, playful border radius shapes for the images
  const getRadiusShape = (idx: number) => {
    const shapes = [
      "rounded-3xl",
      "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl",
      "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl",
      "rounded-[2.5rem]",
    ];
    return shapes[idx % shapes.length];
  };

  return (
    <section id="portfolio" className="py-24 bg-[#FDFBF7] text-brand-blue overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 relative">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 tracking-tight text-brand-blue">
            Engage with Our <br className="hidden md:block" />
            <span className="text-brand-gold">Stunning Work</span>
          </h2>
          <p className="text-base md:text-xl text-slate-600">
            A glimpse into our professional electrical installations, complete building wiring projects, and repairs. Click any image to pause and take a closer look!
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div 
        className="relative flex flex-col overflow-x-hidden group pb-24 cursor-pointer"
        onClick={() => setIsPaused(!isPaused)}
      >
        <div className="relative flex overflow-x-hidden w-full">
          <div className={`flex space-x-4 md:space-x-6 px-2 md:px-3 animate-marquee min-w-max transition-all ${isPaused ? '[animation-play-state:paused]' : 'md:group-hover:[animation-play-state:paused]'}`}>
            {images.map((src, idx) => (
              <div
                key={`marquee-1-${idx}`}
                className={`relative w-[240px] h-[320px] sm:w-[280px] sm:h-[380px] md:w-[320px] md:h-[420px] overflow-hidden shrink-0 shadow-xl border border-black/5 hover:-translate-y-2 transition-transform duration-300 bg-brand-light ${getRadiusShape(
                  idx
                )}`}
              >
                <Image
                  src={src}
                  alt={`Work Showcase ${idx + 1}`}
                  width={400}
                  height={500}
                  priority={idx < 4}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate the list to create a seamless infinite loop */}
          <div className={`flex space-x-4 md:space-x-6 px-2 md:px-3 animate-marquee min-w-max transition-all ${isPaused ? '[animation-play-state:paused]' : 'md:group-hover:[animation-play-state:paused]'}`} aria-hidden="true">
            {images.map((src, idx) => (
              <div
                key={`marquee-2-${idx}`}
                className={`relative w-[240px] h-[320px] sm:w-[280px] sm:h-[380px] md:w-[320px] md:h-[420px] overflow-hidden shrink-0 shadow-xl border border-black/5 hover:-translate-y-2 transition-transform duration-300 bg-brand-light ${getRadiusShape(
                  idx
                )}`}
              >
                <Image
                  src={src}
                  alt={`Work Showcase duplicate ${idx + 1}`}
                  width={400}
                  height={500}
                  priority={idx < 4}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Play/Pause Toggle Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-6 md:right-1/2 md:translate-x-1/2 z-10">
          <button 
            className="flex items-center gap-2 bg-brand-blue/90 backdrop-blur-md text-white px-5 py-3 rounded-full shadow-lg border border-white/20 hover:bg-brand-gold hover:text-brand-blue transition-colors font-bold text-sm tracking-wide"
            onClick={(e) => {
              e.stopPropagation(); // prevent double toggle from parent click
              setIsPaused(!isPaused);
            }}
          >
            {isPaused ? (
              <>
                <Play size={18} className="fill-current ml-0.5" />
                <span>Play (Click to resume)</span>
              </>
            ) : (
              <>
                <Pause size={18} className="fill-current" />
                <span>STOP</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
