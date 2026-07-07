import { Award, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Certifications() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-brand-gold/10 rounded-full mb-6">
          <Award className="w-12 h-12 text-brand-gold" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
          Certified & Recognized
        </h2>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
          We are proud to be officially certified and recognized by the{" "}
          <strong className="text-brand-blue">Government of Bengaluru, Karnataka</strong>. Our commitment to safety, compliance, and excellence ensures your electrical systems are in the best hands.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-3 bg-brand-light px-6 py-4 rounded-2xl border border-gray-100 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-green-500" />
            <div className="text-left">
              <span className="block font-bold text-brand-blue text-lg">Govt. Certified</span>
              <span className="text-sm text-slate-500">Bengaluru, Karnataka</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-brand-light px-6 py-4 rounded-2xl border border-gray-100 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-green-500" />
            <div className="text-left">
              <span className="block font-bold text-brand-blue text-lg">Safety Compliant</span>
              <span className="text-sm text-slate-500">100% Secure Wiring</span>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-brand-gold/20">
          <Image
            src="/certificate.jpeg"
            alt="Government Certification - Prasad Electrical Works"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
