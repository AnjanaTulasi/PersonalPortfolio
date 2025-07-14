import { Building, Rocket, Users, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Company Logo Components
const NextGenLogo = ({ url }: { url: string }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block"
  >
    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:border-blue-300 cursor-pointer">
      <img 
        src="/nextgen-logo.png"
        alt="NextGen Software Solutions Logo"
        className="w-10 h-8 object-contain transition-transform duration-300 hover:scale-105"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.parentElement!.innerHTML = '<div class="text-blue-600 font-bold text-xs">NG</div>';
        }}
      />
    </div>
  </a>
);

const HeadstarterLogo = ({ url }: { url: string }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block"
  >
    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-gray-800 cursor-pointer">
      <img 
        src="/headstarter-logo.png"
        alt="Headstarter Fellowship Logo"
        className="w-8 h-8 object-contain transition-transform duration-300 hover:scale-105"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.parentElement!.innerHTML = '<div class="text-green-400 font-bold text-xs">HS</div>';
        }}
      />
    </div>
  </a>
);

const StCloudStateLogo = ({ url }: { url: string }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block"
  >
    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:border-red-300 cursor-pointer">
      <img 
        src="/scsu-logo-updated.png"
        alt="Saint Cloud State University Logo"
        className="w-10 h-10 object-contain transition-transform duration-300 hover:scale-105"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.parentElement!.innerHTML = '<div class="text-red-600 font-bold text-[10px]">SCSU</div>';
        }}
      />
    </div>
  </a>
);

const VodafoneLogo = ({ url }: { url: string }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block"
  >
    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:border-red-300 cursor-pointer">
      <img 
        src="/vois-logo.png"
        alt="Vodafone VOIS Logo"
        className="w-10 h-6 object-contain transition-transform duration-300 hover:scale-105"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.parentElement!.innerHTML = '<div class="text-red-600 font-bold text-xs">VOIS</div>';
        }}
      />
    </div>
  </a>
);

export default function Experience() {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "NextGen Software Solutions",
      companyUrl: "https://nxtgensoftwaresolutions.com/",
      period: "September 2024 – April 2025",
      description: "Working on middleware development, WebLogic administration, and automation scripting to streamline deployment processes.",
      logo: NextGenLogo
    },
    {
      title: "Software Engineering Fellow",
      company: "Headstarter Fellowship",
      companyUrl: "https://headstarter.co/",
      period: "July 2024 – September 2024",
      description: "Intensive full-stack web development program focusing on modern JavaScript frameworks, React, and backend technologies.",
      logo: HeadstarterLogo
    },
    {
      title: "Graduate Assistant & TRIO Tutor",
      company: "Saint Cloud State University",
      companyUrl: "https://www.stcloudstate.edu/",
      period: "January 2023 – Present",
      description: "Teaching mobile app development concepts and providing tutoring in Computer Science and Mathematics for undergraduate students.",
      logo: StCloudStateLogo
    },
    {
      title: "Middleware Engineer",
      company: "Vodafone (VOIS)",
      companyUrl: "https://www.vodafone.com/careers/professional-career-areas/shared-services",
      period: "December 2019 – December 2022",
      description: "Specialized in middleware automation, system monitoring, and performance optimization using various enterprise tools and technologies.",
      logo: VodafoneLogo
    }
  ];

  return (
    <div className="p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Experience</h1>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const LogoComponent = exp.logo;
            return (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <LogoComponent url={exp.companyUrl} />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                      <a 
                        href={exp.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary font-medium hover:text-blue-700 hover:underline transition-colors inline-block"
                      >
                        {exp.company}
                      </a>
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
