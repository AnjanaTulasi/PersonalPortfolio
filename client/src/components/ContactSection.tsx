import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="py-12 px-8 bg-[#467fdb] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-center whitespace-nowrap overflow-hidden text-ellipsis text-[#ffffff] text-[15px]">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology. Feel free to reach out through
            any of the channels below.
          </p>
        </div>

        <div className="space-y-8">
          {/* First Row: Email, Phone, Address */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-center md:text-left">
                <a
                  href="mailto:anjanatdeverapalli@gmail.com"
                  className="text-slate-300 hover:text-white transition-colors text-sm break-all"
                >
                  anjanatdeverapalli@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-center md:text-left">
                <a
                  href="tel:+13202828209"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  +1 (320) 282-8209
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-center md:text-left">
                <span className="text-slate-300 text-sm">
                  St. Cloud, Minnesota, USA
                </span>
              </div>
            </div>
          </div>

          {/* Second Row: GitHub and LinkedIn icons only */}
          <div className="flex justify-center gap-6 mt-4">
            <button
              onClick={() =>
                window.open("https://github.com/AnjanaTulasi", "_blank")
              }
              className="hover:scale-110 transition-transform duration-200"
            >
              <img src="/github-logo.png" alt="GitHub" className="w-6 h-6" />
            </button>

            <button
              onClick={() =>
                window.open("https://linkedin.com/in/anjanatulasi", "_blank")
              }
              className="hover:scale-110 transition-transform duration-200"
            >
              <img
                src="/linkedin-logo.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
