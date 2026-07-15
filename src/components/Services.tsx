import { Home, Zap, Wrench, Settings } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-brand-gold" />,
      title: "Complete Building Wiring in Bengaluru",
      description:
        "Full house wiring and commercial building wiring from scratch for new homes and shops across Srinivasapura, Yelahanka, and Kengeri. Includes main electrical room layouts, meter panel installations, and safe internal wiring as per Karnataka government safety standards.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-brand-gold" />,
      title: "Home Electrical Repairs Near Me",
      description:
        "Quick and reliable electrical repair services — switches, sockets, fan installations, and fault troubleshooting. Serving Jakkur, Agrahara Layout, Kogilu Layout, RR Nagar, and all nearby Bengaluru areas. Available for same-day emergency calls.",
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-gold" />,
      title: "UPS & Inverter Installation Bengaluru",
      description:
        "Professional setup of UPS systems, inverter connections, generator wiring, digital meter installation, and water motor connections. Heavy-duty electrical installations for homes and businesses in Srinivasapura and surrounding areas.",
    },
    {
      icon: <Settings className="w-8 h-8 text-brand-gold" />,
      title: "Switchboard & LED Light Installation",
      description:
        "Modern switchboard installation, LED lighting setups, panel upgrades, and old-to-new wiring conversions. Energy-efficient lighting solutions for homes and offices across Yelahanka, Kengeri, and all Bengaluru service areas.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Electrical Services in Srinivasapura &amp; Bengaluru
          </h2>
          <p className="text-lg text-slate-600">
            Government-certified, professional, and transparent electrical
            services for all your residential and commercial needs. Serving
            Yelahanka, Jakkur, Kengeri, Agrahara Layout, Kogilu Layout &amp; RR
            Nagar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-brand-blue/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                <div className="group-hover:brightness-200 transition-all duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
