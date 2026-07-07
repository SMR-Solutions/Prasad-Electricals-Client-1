import { MapPin, Clock, Phone, Navigation, MessageCircle } from "lucide-react";

export default function Contact() {
  const serviceAreas = [
    "Srinivasapura",
    "Yelahanka",
    "Jakkur",
    "Kengeri",
    "Agrahara Layout",
    "Kogilu Layout",
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
              Get in Touch with Us
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Need an electrician immediately? We are just a call away. We provide quick and reliable service across Bengaluru.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-blue mb-1">Call Us 24/7</h4>
                  <a href="tel:09148842696" className="text-xl font-bold text-brand-lightBlue hover:underline">
                    091488 42696
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-blue mb-1">Our Location</h4>
                  <p className="text-slate-600 leading-relaxed">
                    RR Nagar, YGR Signature Mall,<br />
                    Srinivasapura, Bengaluru,<br />
                    Karnataka 560064
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-blue mb-1">Working Hours</h4>
                  <p className="text-slate-600">
                    Monday - Sunday<br />
                    09:00 AM - 06:00 PM<br />
                    <span className="text-brand-gold font-medium text-sm">(Emergency services available)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="areas" className="bg-brand-light p-8 md:p-10 rounded-3xl border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Navigation className="w-6 h-6 text-brand-gold" />
              <h3 className="text-2xl font-bold text-brand-blue">Service Areas</h3>
            </div>
            <p className="text-slate-600 mb-8">
              We proudly serve various locations across Bengaluru. If your area is nearby, give us a call!
            </p>
            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span className="text-brand-blue font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="https://wa.me/919148842696?text=Hi%20Prasad%20Electrical%20Works%20%2C%20I%20have%20some%20electrical%20works%20-%20how%20much%20do%20you%20charge"
                target="_blank"
                rel="noopener noreferrer"
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
