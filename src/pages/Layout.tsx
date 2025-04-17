import { useState } from "react";
import { Outlet } from "react-router-dom";
import ScrHeader from "@/components/ScrHeader";
import ScrSidebar from "@/components/ScrSidebar";
import ScrFooter from "@/components/ScrFooter";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrHeader toggleSidebar={() => setSidebarOpen(true)} />
      <ScrSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <main className="flex-1">
        <Outlet />
      </main>
      
      <ScrFooter />
    </div>
  );
};

export default Layout;