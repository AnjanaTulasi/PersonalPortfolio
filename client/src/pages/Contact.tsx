import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Create mailto link
    const fullName = `${formData.firstName} ${formData.lastName}`;
    const subject = encodeURIComponent(`Portfolio Contact from ${fullName}`);
    const body = encodeURIComponent(`Name: ${fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:anjanatdeverapalli@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Success",
      description: "Your email client should open with the message ready to send!",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="p-8 md:p-12 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Contact Me</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to collaborate? I'd love to hear from you. Send me a message and let's discuss how we can work together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">Let's Connect</h2>
              <p className="text-slate-600 mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're looking to discuss a potential collaboration or just want to say hello, 
                don't hesitate to reach out.
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <a 
                    href="mailto:anjanatdeverapalli@gmail.com"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    anjanatdeverapalli@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Phone</p>
                  <a 
                    href="tel:+13202828209"
                    className="text-slate-600 hover:text-green-600 transition-colors"
                  >
                    +1 (320) 282-8209
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Location</p>
                  <p className="text-slate-600">St. Cloud, Minnesota, USA</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/anjanatulasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-blue-600" />
                </a>
                <a
                  href="https://github.com/AnjanaTulasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-6 w-6 text-gray-700" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      First Name *
                    </Label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Your first name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name *
                    </Label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your last name"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                {/* Email */}
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>
                
                {/* Message */}
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    required
                    className="w-full resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
