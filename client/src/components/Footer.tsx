import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Anjana Tulasi Deverapalli</h3>
              <p className="text-slate-600">Software Developer & CS Graduate Student</p>
            </div>
            <div>
              <h4 className="font-medium text-slate-800 mb-2">Contact</h4>
              <p className="text-slate-600">anjanatdeverapalli@gmail.com</p>
              <p className="text-slate-600">St. Cloud, MN, USA</p>
            </div>
            <div>
              <div className="flex justify-center md:justify-start space-x-3">
                <a
                  href="https://linkedin.com/in/anjanatulasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-blue-600" />
                </a>
                <a
                  href="https://github.com/AnjanaTulasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Github className="h-4 w-4 text-gray-700" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-slate-500">&copy; 2025 Anjana Tulasi Deverapalli. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
