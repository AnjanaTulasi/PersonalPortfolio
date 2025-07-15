import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="py-12 px-6 bg-[#467fdb] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-white text-sm text-center max-w-3xl mx-auto px-4">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology. Feel free to reach out through
            any of the channels below.
          </p>
        </div>

        <div className="space-y-12">
          {/* Row 1: Email, Phone, Location */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-center md:text-left">
                <a
                  href="mailto:anjanatdeverapalli@gmail.com"
                  className="text-white hover:underline text-sm break-all"
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
                  className="text-white hover:underline text-sm"
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
                <h3 className="font-semibold text-sm mb-1">Location</h3>
                <span className="text-white text-sm">
                  St. Cloud, Minnesota, USA
                </span>
              </div>
            </div>
          </div>

          {/* Row 2: Social Links */}
          <div className="flex justify-center gap-6">
            <Button
              variant="ghost"
              className="border border-white/30 text-white hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105 px-4"
              onClick={() =>
                window.open("https://github.com/AnjanaTulasi", "_blank")
              }
            >
              <Github className="w-5 h-5 mr-2" />
            </Button>

            <Button
              variant="ghost"
              className="border border-white/30 text-white hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105 px-4"
              onClick={() =>
                window.open("https://linkedin.com/in/anjanatulasi", "_blank")
              }
            >
              <Linkedin className="w-5 h-5 mr-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
