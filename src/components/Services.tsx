import { Home, Zap, Wrench, Settings } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-brand-gold" />,
      title: "Complete Building Wiring",
      description:
        "Wiring from scratch for new homes and shops. Includes main electrical room layouts, meter panel installations, and safe internal house wiring.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-brand-gold" />,
      title: "Basic Home Repairs",
      description:
        "Quick and reliable fixes for switches, sockets, fan installations, and troubleshooting electrical faults in your home.",
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-gold" />,
      title: "Heavy-Duty Installations",
      description:
        "Professional setup of UPS/inverters, generator connections, digital meters, and water motor connections.",
    },
    {
      icon: <Settings className="w-8 h-8 text-brand-gold" />,
      title: "Lighting & Switchboards",
      description:
        "Modern switchboard installations, LED lighting setups, and upgrading old panels to modern, safe standards.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Our Electrical Services
          </h2>
          <p className="text-lg text-slate-600">
            Professional, safe, and transparent services for all your residential and commercial needs.
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
