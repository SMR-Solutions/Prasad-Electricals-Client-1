export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceAreas = [
    "Srinivasapura",
    "Yelahanka",
    "Jakkur",
    "Kengeri",
    "Agrahara Layout",
    "Kogilu Layout",
    "RR Nagar",
  ];

  const services = [
    "House Wiring",
    "Switchboard Installation",
    "LED Light Fitting",
    "Emergency Repairs",
    "UPS & Inverter Setup",
    "Building Wiring",
  ];

  return (
    <footer className="bg-brand-blue pt-16 pb-8 border-t border-brand-blue/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white text-brand-blue rounded-xl flex items-center justify-center font-bold text-2xl">
                P
              </div>
              <div>
                <span className="font-bold text-xl text-white tracking-tight leading-tight block">
                  Prasad
                </span>
                <span className="font-semibold text-sm text-brand-gold leading-tight block">
                  Electrical Works
                </span>
              </div>
            </div>
            <p className="text-gray-300 max-w-sm mb-4 leading-relaxed">
              Government-certified electrician in Bengaluru providing
              professional residential and commercial electrical services.
              Trusted by hundreds of homes across Srinivasapura, Yelahanka, and
              surrounding areas.
            </p>
            <p className="text-gray-400 text-sm">
              📍 RR Nagar, YGR Signature Mall, Srinivasapura, Bengaluru,
              Karnataka 560064
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">
              Service Areas
            </h4>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <a
                    href="#areas"
                    className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                    title={`Electrician in ${area} Bengaluru`}
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Column */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">
              Emergency? Call Now
            </h4>
            <p className="text-gray-400 mb-4 text-sm">
              Available for emergency electrical breakdowns across Bengaluru.
              Day or night, we&apos;re one call away.
            </p>
            <a
              href="tel:+919148842696"
              id="footer-call-button"
              className="inline-block bg-brand-gold text-brand-blue font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors text-lg"
            >
              📞 +91 91488 42696
            </a>
            <div className="mt-4">
              <a
                href="https://wa.me/919148842696?text=Hi%20Prasad%20Electrical%20Works%2C%20I%20need%20an%20electrician%20near%20me%20in%20Bengaluru."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#20bd5a] transition-colors text-sm"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with SEO keywords */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Prasad Electrical Works — Best Electrician in
            Srinivasapura, Bengaluru. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs text-center md:text-right">
            Electrician in Yelahanka &bull; Jakkur &bull; Kengeri &bull;
            Agrahara Layout &bull; Kogilu Layout &bull; RR Nagar &bull;
            Karnataka 560064
          </p>
        </div>
      </div>
    </footer>
  );
}
