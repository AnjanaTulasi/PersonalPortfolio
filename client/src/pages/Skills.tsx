import { Code, Paintbrush, Database, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-primary",
      skills: ["Python", "C", "C++", "Shell Scripting", "SQL"],
      badgeColor: "bg-blue-100 text-blue-800 hover:bg-blue-200"
    },
    {
      title: "Frontend Development", 
      icon: Paintbrush,
      color: "text-green-500",
      skills: ["HTML5", "CSS3", "JavaScript", "React"],
      badgeColor: "bg-green-100 text-green-800 hover:bg-green-200"
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-purple-500", 
      skills: ["MongoDB", "PostgreSQL", "Oracle SQL"],
      badgeColor: "bg-purple-100 text-purple-800 hover:bg-purple-200"
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      color: "text-orange-500",
      skills: ["Git", "Jenkins", "Docker", "Splunk", "AppDynamics"],
      badgeColor: "bg-orange-100 text-orange-800 hover:bg-orange-200"
    }
  ];

  return (
    <div className="p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Skills</h1>
        
        <div className="space-y-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                    <Icon className={`h-6 w-6 ${category.color} mr-3`} />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        className={`skill-badge ${category.badgeColor} font-medium cursor-default`}
                      >
                        {skill}
                      </Badge>
                    ))}
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
