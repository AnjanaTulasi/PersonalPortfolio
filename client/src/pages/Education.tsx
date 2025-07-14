import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// University Logo Component
const StCloudStateLogo = () => (
  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-gray-200">
    <img 
      src="/scsu-logo.png"
      alt="Saint Cloud State University Logo"
      className="w-12 h-12 object-contain"
      onError={(e) => {
        // Fallback to icon if image fails to load
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        target.parentElement!.innerHTML = '<div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center"><span class="text-white font-bold text-xs">SCSU</span></div>';
      }}
    />
  </div>
);

export default function Education() {
  const courses = [
    "Operating Systems",
    "Natural Language Processing", 
    "Big Data",
    "Database Systems",
    "Algorithms"
  ];

  const courseColors = [
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-purple-100 text-purple-800",
    "bg-orange-100 text-orange-800",
    "bg-red-100 text-red-800"
  ];

  return (
    <div className="p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Education</h1>
        
        <Card className="hover-lift">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <StCloudStateLogo />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">Master's in Computer Science</h3>
                <a 
                  href="https://www.stcloudstate.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg text-primary font-medium mb-2 hover:text-blue-700 hover:underline transition-colors inline-block"
                >
                  Saint Cloud State University
                </a>
                <p className="text-slate-600 mb-4">January 2023 – May 2025</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-3">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course, index) => (
                      <Badge 
                        key={course}
                        variant="secondary"
                        className={`${courseColors[index]} font-medium`}
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
