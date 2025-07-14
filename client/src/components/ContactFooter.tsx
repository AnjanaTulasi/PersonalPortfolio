import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-8 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Anjana Tulasi Deverapalli</h3>
            <p className="text-lg text-slate-600 mb-6">Software Developer & CS Graduate Student</p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-slate-800 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-slate-600" />
                <a 
                  href="mailto:anjanatdeverapalli@gmail.com" 
                  className="text-slate-700 hover:text-primary transition-colors"
                >
                  anjanatdeverapalli@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-slate-600" />
                <span className="text-slate-700">St. Cloud, MN, USA</span>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <a
                  href="https://linkedin.com/in/anjanatulasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/AnjanaTulasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-600 hover:text-gray-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}