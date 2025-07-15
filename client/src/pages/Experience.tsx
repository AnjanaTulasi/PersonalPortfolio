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
      description: ["Administered Oracle WebLogic and Fusion Middleware environments, supporting deployments, domain restarts, and cloud-integrated hybrid systems.",
"Automated operational tasks and alert systems using WLST, Shell, and Python, improving efficiency and monitoring across Unix/Linux platforms.",
"Resolved high-priority SOA/AIA and database performance issues, contributing to platform reliability and service continuity.", 
"Participated in Agile workflows using Jira for sprint tracking and collaborated with cross-functional teams to enhance cloud adoption strategies."],
      logo: NextGenLogo
    },
    {
      title: "Software Engineering Fellow",
      company: "Headstarter Fellowship",
      companyUrl: "https://headstarter.co/",
      period: "July 2024 – September 2024",
      description: ["Completed intensive training in web development and database integration, gaining hands-on experience.", 
"As a Headstarter Fellow, contributed to full-stack development, API integration, database management, and UI/UX enhancements across multiple team and solo projects.", 
"Built personal portfolio website (HTML, CSS, Google Analytics) and Pantry Management App (Next.js, Material UI, Firebase) with end-to-end development and deployment."],
      logo: HeadstarterLogo
    },
    {
      title: "Graduate Assistant & TRIO Tutor",
      company: "Saint Cloud State University",
      companyUrl: "https://www.stcloudstate.edu/",
      period: "January 2023 – Present",
      description: [
        "Mentored undergraduates in app development and cloud computing while grading assignments and preparing lecture materials.",
        "Conducted code reviews and edited IEEE research papers for technical accuracy and formatting standards.",
        "Provided 1:1 tutoring in Mathematics and Computer Science, adapting support plans to meet diverse student needs.",
        "Conducted outreach for TRIO services and connected students with financial aid, career, and counseling resources."
      ],

      logo: StCloudStateLogo
    },
    {
      title: "Middleware Engineer",
      company: "Vodafone (VOIS)",
      companyUrl: "https://www.vodafone.com/careers/professional-career-areas/shared-services",
      period: "December 2019 – December 2022",
      description: ["Oracle Fusion Middleware Application Support Engineer: Served as key support engineer for WebLogic Administration and Oracle Database in high-availability environments.", "Reduced incident volume by 70% through proactive monitoring and system maintenance, improving uptime and application stability.", "Supported and optimized SOA Suite and Oracle Service Bus (OSB), reducing downtime and user complaints by 85%.", "Spearheaded WebLogic migration from 11g to 12c, enhancing performance, scalability, and security.", "Automated deployments and maintenance using Python, WLST, and Shell scripting, reducing manual intervention by 40%.", "Conducted root cause analysis using heap and thread dumps to identify memory leaks and performance issues.", "Managed deployments, version control, domain restarts, and platform upgrades in production.", "Integrated Oracle Middleware with Oracle Cloud Infrastructure (OCI) and third-party clouds for hybrid deployment.", "Implemented real-time monitoring and alerting with Splunk and AppDynamics, reducing incident response times by 50%.", "Performed SOAP API testing to validate service integrations and ensure reliability across systems."],
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
                  <div className="flex items-start space-x-4 text-justify">
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
                      <ul className="text-slate-600 space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
