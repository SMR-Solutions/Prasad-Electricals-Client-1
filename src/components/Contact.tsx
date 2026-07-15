import { MapPin, Clock, Phone, Navigation, MessageCircle } from "lucide-react";

export default function Contact() {
  const serviceAreas = [
    {
      name: "Srinivasapura",
      keyword: "Electrician in Srinivasapura",
    },
    {
      name: "Yelahanka",
      keyword: "Electrician near Yelahanka",
    },
    {
      name: "Jakkur",
      keyword: "Electrician in Jakkur",
    },
    {
      name: "Kengeri",
      keyword: "Electrician near Kengeri",
    },
    {
      name: "Agrahara Layout",
      keyword: "Electrician in Agrahara Layout",
    },
    {
      name: "Kogilu Layout",
      keyword: "Electrician near Kogilu Layout",
    },
    {
      name: "RR Nagar",
      keyword: "Electrician in RR Nagar",
    },
    {
      name: "Bengaluru North",
      keyword: "Electrician Bengaluru North",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO-rich heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Contact Prasad Electrical Works — Bengaluru
          </h2>
          <p className="text-lg text-slate-600">
            Need an electrician near you in Srinivasapura, Yelahanka, or
            anywhere across Bengaluru? We&apos;re just a call away. Fast,
            reliable, and affordable electrical services at your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-brand-blue mb-8">
              Reach Us Anytime
            </h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-blue mb-1">
                    Call Us — Available 24/7
                  </h4>
                  <a
                    href="tel:+919148842696"
                    className="text-xl font-bold text-brand-lightBlue hover:underline"
                    aria-label="Call Prasad Electrical Works"
                  >
                    +91 91488 42696
                  </a>
                  <p className="text-sm text-slate-500 mt-1">
                    Emergency electrical breakdowns? Call immediately.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-blue mb-1">
                    WhatsApp for Quick Quotes
                  </h4>
                  <a
                    href="https://wa.me/919148842696?text=Hi%20Prasad%20Electrical%20Works%2C%20I%20need%20an%20electrician%20near%20me%20in%20Bengaluru.%20What%20are%20your%20charges%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-[#25D366] hover:underline"
                  >
                    +91 91488 42696
                  </a>
                  <p className="text-sm text-slate-500 mt-1">
                    Send photos of your electrical issue for instant estimates.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-blue mb-1">
                    Our Location
                  </h4>
                  <address className="not-italic text-slate-600 leading-relaxed">
                    RR Nagar, YGR Signature Mall,
                    <br />
                    Srinivasapura, Bengaluru,
                    <br />
                    Karnataka 560064, India
                  </address>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-blue mb-1">
                    Working Hours
                  </h4>
                  <p className="text-slate-600">
                    Monday – Sunday
                    <br />
                    09:00 AM – 06:00 PM
                    <br />
                    <span className="text-brand-gold font-medium text-sm">
                      (Emergency services available 24/7)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="areas" className="bg-brand-light p-8 md:p-10 rounded-3xl border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Navigation className="w-6 h-6 text-brand-gold" />
              <h3 className="text-2xl font-bold text-brand-blue">
                Service Areas in Bengaluru
              </h3>
            </div>
            <p className="text-slate-600 mb-8">
              We proudly serve homes and businesses across these Bengaluru
              locations. Looking for an electrician near you? If your area is
              listed below, give us a call!
            </p>
            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2"
                  title={area.keyword}
                >
                  <div className="w-2.5 h-2.5 bg-brand-gold rounded-full shrink-0"></div>
                  <span className="text-brand-blue font-medium">
                    {area.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Hidden SEO text for crawler indexing */}
            <p className="sr-only">
              Prasad Electrical Works serves as the best electrician in
              Srinivasapura Bengaluru, electrician near Yelahanka, electrician
              in Jakkur, electrician near Kengeri, electrician in Agrahara
              Layout, electrician near Kogilu Layout, electrician in RR Nagar
              Bengaluru. Affordable house wiring, switchboard installation, LED
              light fitting, UPS installation, inverter setup, emergency
              electrical repair services across Bengaluru Karnataka 560064.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href="tel:+919148842696"
                id="areas-call-button"
                className="w-full inline-flex justify-center items-center gap-2 bg-brand-gold text-brand-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                <Phone size={22} />
                Call +91 91488 42696
              </a>
              <a
                href="https://wa.me/919148842696?text=Hi%20Prasad%20Electrical%20Works%2C%20I%20need%20an%20electrician%20near%20me%20in%20Bengaluru.%20What%20are%20your%20charges%3F"
                target="_blank"
                rel="noopener noreferrer"
                id="areas-whatsapp-button"
                className="w-full inline-flex justify-center items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                <MessageCircle size={22} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
