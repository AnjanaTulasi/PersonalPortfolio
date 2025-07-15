import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="bg-slate-900 text-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            Feel free to reach out through any of the channels below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a 
                  href="mailto:anjanatdeverapalli@gmail.com" 
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  anjanatdeverapalli@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <span className="text-slate-300">+1 (320) 282-8209</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <span className="text-slate-300">St. Cloud, Minnesota, USA</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
                onClick={() => window.open('https://github.com/AnjanaTulasi', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
                onClick={() => window.open('https://linkedin.com/in/anjanatulasi', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Current Status</h3>
              <p className="text-slate-300">
                🎓 Pursuing Master's in Computer Science at Saint Cloud State University<br/>
                💼 Open to full-time opportunities starting May 2025<br/>
                🚀 Available for internships and consulting projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}