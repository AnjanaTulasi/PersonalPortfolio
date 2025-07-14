import { Brain, Car, Heart, Languages, Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "AVATAR",
      description: "Advanced machine learning project using OpenBCI for brainwave-controlled drone navigation. Implements real-time EEG signal processing and neural interface technology.",
      icon: Brain,
      gradient: "from-primary to-blue-600",
      technologies: ["Machine Learning", "OpenBCI", "Python"],
      techColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800"]
    },
    {
      title: "IoT Parking System",
      description: "Smart parking solution using MQTT protocol, RFID technology, and ALPR for real-time parking space reservation and management.",
      icon: Car,
      gradient: "from-green-500 to-emerald-600",
      technologies: ["IoT", "MQTT", "RFID", "ALPR"],
      techColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-orange-100 text-orange-800"]
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform built with React frontend and hybrid database architecture using PostgreSQL and MongoDB for optimal data management.",
      icon: Heart,
      gradient: "from-purple-500 to-pink-600",
      technologies: ["React", "PostgreSQL", "MongoDB"],
      techColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800"]
    },
    {
      title: "Hindi POS Tagger",
      description: "Natural Language Processing project implementing Hidden Markov Models for Part-of-Speech tagging in Hindi language text processing.",
      icon: Languages,
      gradient: "from-orange-500 to-red-600",
      technologies: ["NLP", "Hidden Markov Models", "Python"],
      techColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800"]
    }
  ];

  return (
    <div className="p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Projects</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="overflow-hidden hover-lift">
                <div className={`bg-gradient-to-br ${project.gradient} h-32 flex items-center justify-center`}>
                  <Icon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={tech}
                        className={`${project.techColors[techIndex]} text-xs`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="link" className="text-primary hover:text-blue-700 p-0 h-auto font-medium">
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </Button>
                    <Button variant="link" className="text-primary hover:text-blue-700 p-0 h-auto font-medium">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
