import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <div className="bg-slate-900 text-white py-8 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-slate-300 mb-6">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:anjana.deverapalli@example.com" className="text-slate-300 hover:text-white transition-colors">
                  anjana.deverapalli@example.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">Available upon request</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">Saint Cloud, Minnesota</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                className="border-slate-600 text-white hover:bg-slate-800 flex-1"
                onClick={() => window.open('https://github.com/anjana-deverapalli', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-600 text-white hover:bg-slate-800 flex-1"
                onClick={() => window.open('https://linkedin.com/in/anjana-deverapalli', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}