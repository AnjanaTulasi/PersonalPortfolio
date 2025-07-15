import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import GreetingSwitcher from "@/components/GreetingSwitcher";

export default function Home() {
  return (
    <div className="p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                <GreetingSwitcher />, I'm <span className="text-primary">Anjana Tulasi</span> 👋
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6">
                Software Developer & CS Graduate Student
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed text-justify bg-[#ffffff00]">
              I'm a passionate software developer currently pursuing my Master's in Computer Science at Saint Cloud State University. 
              With experience in full-stack development, middleware engineering, and machine learning, I love building innovative 
              solutions that make a difference. I'm particularly interested in AI/ML applications and scalable web technologies.
            </p>
            
            <div className="flex space-x-4">
              <Link href="/projects">
                <Button className="bg-primary text-white hover:bg-blue-700">
                  View My Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
          
                    <div className="flex justify-center">
                      <div className="w-[400px] h-[400px] shadow-xl overflow-hidden">
                        <img 
                          src="/profile.jpg"
                          alt="Anjana Tulasi Deverapalli"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = `
                              <div class="w-full h-full bg-blue-600 flex items-center justify-center">
                                <span class="text-8xl text-white font-bold">AT</span>
                              </div>
                            `;
                          }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
