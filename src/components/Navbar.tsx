"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Areas", href: "#areas" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-brand-gold/50 shadow-lg group-hover:scale-105 transition-transform">
              <Image 
                src="/Logo.jpg" 
                alt="Prasad Electrical Works Logo" 
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-black text-2xl text-brand-blue tracking-tight leading-none block group-hover:text-brand-lightBlue transition-colors">
                Prasad
              </span>
              <span className="font-bold text-sm text-brand-gold leading-tight block mt-0.5 uppercase tracking-wide">
                Electrical Works
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-brand-blue font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:09148842696"
              className="flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-full font-semibold hover:bg-brand-blue/90 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-blue focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 z-40">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3.5 rounded-xl text-base font-bold text-brand-blue bg-brand-blue/5 hover:bg-brand-blue hover:text-white transition-all shadow-sm text-center border border-brand-blue/10"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:09148842696"
              className="mt-6 flex items-center justify-center gap-2 w-full bg-brand-gold text-brand-blue px-5 py-4 rounded-xl font-black text-lg shadow-md hover:bg-yellow-400"
            >
              <Phone size={22} />
              Call 091488 42696
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
