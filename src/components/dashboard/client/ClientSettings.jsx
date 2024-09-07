import { Outlet } from "react-router-dom";
import ClientSettingsSidebar from "./ClientSettingsSidebar";

function ClientSettings() {
  return (
    // Change that padding later
    <div className="grid lg:grid-cols-[260px_1fr] gap-10 p-2 md:px-16">
      <ClientSettingsSidebar />
      <section >
        <Outlet />
      </section>
    </div>
  );
}

export default ClientSettings;
