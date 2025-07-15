import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import ContactSection from "./ContactSection";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="md:ml-80 pt-16 md:pt-0">
        <div className="page-transition">
          {children}
        </div>
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
