import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import ContactSection from "./ContactSection";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Sidebar />
      <main className="md:ml-80 pt-16 md:pt-0 flex-1 flex flex-col">
        <div className="page-transition flex-1">
          {children}
        </div>
        <div className="mt-auto">
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}
