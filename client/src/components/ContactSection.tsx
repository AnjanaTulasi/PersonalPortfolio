import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <section className="py-12 px-8 bg-[#467fdb] pl-[32px] pr-[32px] text-left text-[#ffffff]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            Feel free to reach out through any of the channels below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {/* Contact Info - Horizontal Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Email</h3>
                <a 
                  href="mailto:anjanatdeverapalli@gmail.com" 
                  className="text-slate-300 hover:text-white transition-colors text-sm text-left"
                >
                  anjanatdeverapalli@gmail.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Phone</h3>
                <span className="text-slate-300 text-sm">+1 (320) 282-8209</span>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Location</h3>
                <span className="text-slate-300 text-sm">St. Cloud, Minnesota, USA</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <Button 
                  variant="outline" 
                  className="border-slate-600 text-white hover:bg-slate-800 bg-transparent mb-2"
                  onClick={() => window.open('https://github.com/AnjanaTulasi', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <p className="text-slate-400 text-xs">Access open repositories</p>
              </div>
              
              <div className="text-center">
                <Button 
                  variant="outline" 
                  className="border-slate-600 text-white hover:bg-slate-800 bg-transparent mb-2"
                  onClick={() => window.open('https://linkedin.com/in/anjanatulasi', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <p className="text-slate-400 text-xs">Let's connect</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-slate-300 text-sm">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="bg-slate-700 border-slate-600 text-white mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-slate-300 text-sm">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="bg-slate-700 border-slate-600 text-white mt-1"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-slate-300 text-sm">Email ID</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-slate-700 border-slate-600 text-white mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-slate-300 text-sm">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-slate-700 border-slate-600 text-white mt-1 min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}