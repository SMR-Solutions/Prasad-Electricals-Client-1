"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

export default function Portfolio() {
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  // We duplicate the images to allow for a seamless infinite scroll loop
  // For native swiping, having 3 sets ensures they can swipe forward and back smoothly
  const allImages = [...images, ...images, ...images];

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Handle auto-scrolling loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        
        // If we've scrolled past one full set of images (1/3 of the total width)
        // jump back seamlessly to simulate infinite scroll
        const oneSetWidth = scrollRef.current.scrollWidth / 3;
        if (scrollRef.current.scrollLeft >= oneSetWidth * 2) {
          scrollRef.current.scrollLeft -= oneSetWidth;
        } else if (scrollRef.current.scrollLeft <= 0) {
           scrollRef.current.scrollLeft += oneSetWidth;
        }
      }
    }, 20); // Adjust speed here, lower is faster

    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle any user interaction (touch, click, swipe) to pause
  const handleUserInteraction = () => {
    setIsPaused(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    // Auto-resume after 7 seconds
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 7000);
  };

  // Explicit button toggle
  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPaused) {
      setIsPaused(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    } else {
      handleUserInteraction();
    }
  };

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
            A glimpse into our professional electrical installations, complete building wiring projects, and repairs. Swipe or click to take a closer look!
          </p>
        </div>
      </div>

      {/* Touch-Friendly Auto-Scrolling Marquee */}
      <div className="relative flex flex-col group pb-24">
        
        {/* Style to hide scrollbar but allow native scrolling */}
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />

        <div 
          ref={scrollRef}
          className="flex space-x-4 md:space-x-6 px-4 md:px-8 overflow-x-auto w-full hide-scrollbar touch-pan-x"
          onPointerDown={handleUserInteraction}
          onTouchStart={handleUserInteraction}
          onWheel={handleUserInteraction}
        >
          {allImages.map((src, idx) => (
            <div
              key={`marquee-item-${idx}`}
              className={`relative w-[240px] h-[320px] sm:w-[280px] sm:h-[380px] md:w-[320px] md:h-[420px] overflow-hidden shrink-0 shadow-xl border border-black/5 transition-transform duration-300 bg-brand-light ${getRadiusShape(
                idx
              )}`}
            >
              <Image
                src={src}
                alt={`Work Showcase ${idx + 1}`}
                width={400}
                height={500}
                priority={idx < 4}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Play/Pause Toggle Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-6 md:right-1/2 md:translate-x-1/2 z-10">
          <button 
            className="flex items-center gap-2 bg-brand-blue/90 backdrop-blur-md text-white px-5 py-3 rounded-full shadow-lg border border-white/20 hover:bg-brand-gold hover:text-brand-blue transition-colors font-bold text-sm tracking-wide"
            onClick={togglePlayPause}
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
