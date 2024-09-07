import { Outlet } from "react-router-dom";
// import ClientFooter from "../dashboard/client/ClientFooter";
import ClientSidebar from "../dashboard/client/ClientSidebar";
import ClientNavbar from "../dashboard/client/ClientNavbar";

const ClientLayout = () => {
  return (
    <div className="grid grid-cols-[230px_1fr] h-screen">
      <ClientSidebar />
      <main className="min-h-screen bg-gray-100 flex flex-col">
        <ClientNavbar />
        <section className="flex-grow overflow-auto">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default ClientLayout;
