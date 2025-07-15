import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Resume() {
  return (
    <div className="p-8 md:p-12 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Resume</h1>
          <p className="text-xl text-slate-600">
            View my professional experience and qualifications
          </p>
        </div>

        <Card className="shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="text-2xl text-slate-800">Professional Resume</span>
              <Button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[800px] border border-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="/resume.pdf"
                className="w-full h-full"
                title="Resume PDF"
              />
            </div>
            
            {/* Fallback message if PDF doesn't load */}
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-slate-700 text-center">
                Having trouble viewing the PDF? 
                <button
                  onClick={() => window.open('/resume.pdf', '_blank')}
                  className="ml-2 text-blue-600 hover:text-blue-800 underline"
                >
                  Click here to open it in a new tab
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Alternative viewing options */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Alternative Options</h3>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="flex items-center"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Open in New Tab
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Anjana_Tulasi_Resume.pdf';
                  link.click();
                }}
                className="flex items-center"
              >
                <Download className="h-4 w-4 mr-2" />
                Download to Device
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}