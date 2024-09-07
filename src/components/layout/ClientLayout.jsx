import { Outlet } from "react-router-dom";
// import ClientFooter from "../dashboard/client/ClientFooter";
import ClientSidebar from "../dashboard/client/ClientSidebar";
import ClientNavbar from "../dashboard/client/ClientNavbar";
import ClientSidebarMenu from "../dashboard/client/ClientSidebarMenu";
import ClientOverlay from "../dashboard/client/ClientOverlay";
import { useState } from "react";

const ClientLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid md:grid-cols-[230px_1fr]">
      <ClientSidebar />
      {isOpen && (
        <ClientSidebarMenu onClose={() => setIsOpen(false)} />
      )}
      {isOpen && <ClientOverlay onClose={() => setIsOpen(false)} />}
      <main className="min-h-screen bg-gray-100 flex flex-col">
        <ClientNavbar onOpen={() => setIsOpen(true)} />
        <section className="flex-grow overflow-auto">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default ClientLayout;
