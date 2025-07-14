import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Home, GraduationCap, Briefcase, Settings, Code, Mail, Linkedin, Github, Download } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Sidebar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const navigationItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/education", icon: GraduationCap, label: "Education" },
    { path: "/experience", icon: Briefcase, label: "Experience" },
    { path: "/skills", icon: Settings, label: "Skills" },
    { path: "/projects", icon: Code, label: "Projects" },
    { path: "/contact", icon: Mail, label: "Contact Me" },
  ];

  const closeSidebar = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-sm p-4 flex justify-between items-center fixed w-full top-0 z-50">
        <h1 className="text-xl font-semibold text-slate-800">Portfolio</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {isOpen ? <X className="h-6 w-6 text-slate-600" /> : <Menu className="h-6 w-6 text-slate-600" />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <nav className={`fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-50 overflow-y-auto transition-transform ${
        isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'
      }`}>
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-lg">AT</span>
            </div>
            <div>
              <h2 className="font-semibold text-slate-800">Anjana Tulasi</h2>
              <p className="text-sm text-slate-500">Software Developer</p>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <a
              href="https://linkedin.com/in/anjanatulasi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors"
            >
              <Linkedin className="h-4 w-4 text-blue-600" />
            </a>
            <a
              href="https://github.com/AnjanaTulasi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
            >
              <Github className="h-4 w-4 text-gray-700" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="w-8 h-8 bg-green-100 hover:bg-green-200 rounded-lg flex items-center justify-center transition-colors"
            >
              <Download className="h-4 w-4 text-green-600" />
            </a>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.path;
              
              return (
                <li key={item.path}>
                  <Link href={item.path}>
                    <a
                      className={`nav-link flex items-center space-x-3 px-4 py-3 rounded-lg ${
                        isActive ? 'active' : ''
                      }`}
                      onClick={closeSidebar}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
