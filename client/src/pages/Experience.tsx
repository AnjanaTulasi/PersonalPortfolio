import { Building, Rocket, Users, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "NextGen Software Solutions",
      period: "September 2024 – April 2025",
      description: "Working on middleware development, WebLogic administration, and automation scripting to streamline deployment processes.",
      icon: Building,
      color: "bg-primary"
    },
    {
      title: "Software Engineering Fellow",
      company: "Headstarter Fellowship",
      period: "July 2024 – September 2024",
      description: "Intensive full-stack web development program focusing on modern JavaScript frameworks, React, and backend technologies.",
      icon: Rocket,
      color: "bg-green-500"
    },
    {
      title: "Graduate Assistant & TRIO Tutor",
      company: "Saint Cloud State University",
      period: "January 2023 – Present",
      description: "Teaching mobile app development concepts and providing tutoring in Computer Science and Mathematics for undergraduate students.",
      icon: Users,
      color: "bg-purple-500"
    },
    {
      title: "Middleware Engineer",
      company: "Vodafone (VOIS)",
      period: "December 2019 – December 2022",
      description: "Specialized in middleware automation, system monitoring, and performance optimization using various enterprise tools and technologies.",
      icon: Server,
      color: "bg-red-500"
    }
  ];

  return (
    <div className="p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Experience</h1>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${exp.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-slate-500 mb-3">{exp.period}</p>
                      <p className="text-slate-600">{exp.description}</p>
                    </div>
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
