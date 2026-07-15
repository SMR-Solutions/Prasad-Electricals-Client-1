import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Best Electrician in Srinivasapura Bengaluru - Prasad Electrical Works professional electrical services"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/85 to-brand-blue/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            Available for Emergency Breakdowns — 24/7
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Best Electrician in{" "}
            <span className="text-brand-gold">
              Srinivasapura &amp; Bengaluru
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            Prasad Electrical Works — your trusted electrician near Yelahanka,
            Jakkur, Kengeri, Agrahara Layout &amp; Kogilu Layout. From complete
            house wiring to emergency electrical repairs, we deliver fast,
            reliable, and government-certified electrical services across
            Bengaluru.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+919148842696"
              id="hero-call-button"
              aria-label="Call Prasad Electrical Works at +91 91488 42696"
              className="flex items-center justify-center gap-2 bg-brand-gold text-brand-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(242,169,0,0.3)] hover:shadow-[0_0_25px_rgba(242,169,0,0.5)] active:scale-95"
            >
              <Phone size={22} />
              Call Now — +91 91488 42696
            </a>
            <a
              href="https://wa.me/919148842696?text=Hi%20Prasad%20Electrical%20Works%2C%20I%20need%20an%20electrician%20near%20me%20in%20Bengaluru.%20What%20are%20your%20charges%3F"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-button"
              aria-label="WhatsApp Prasad Electrical Works"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              <MessageCircle size={22} />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <span className="font-bold text-brand-gold text-xl">✓</span>
              </div>
              <span className="font-medium text-base">
                Govt. Certified
                <br />
                Electrician
              </span>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <span className="font-bold text-brand-gold text-xl">⚡</span>
              </div>
              <span className="font-medium text-base">
                Quick On-site
                <br />
                Service
              </span>
            </div>
            <div className="h-12 w-px bg-white/20 hidden sm:block"></div>
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <span className="font-bold text-brand-gold text-xl">★</span>
              </div>
              <span className="font-medium text-base">
                5-Star Rated
                <br />
                on Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
