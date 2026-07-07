export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue pt-16 pb-8 border-t border-brand-blue/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
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
            <p className="text-gray-300 max-w-sm mb-6 leading-relaxed">
              Professional residential and commercial electrical services in Bengaluru. Reliable, safe, and transparent since 2026.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-brand-gold transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-brand-gold transition-colors">Service Areas</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-brand-gold transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Emergency?</h4>
            <p className="text-gray-400 mb-4">
              We are available for emergency electrical breakdowns.
            </p>
            <a href="tel:09148842696" className="inline-block bg-brand-gold text-brand-blue font-bold px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors">
              Call 091488 42696
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Prasad Electrical Works. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Developed with excellence for optimal local reach.
          </p>
        </div>
      </div>
    </footer>
  );
}
