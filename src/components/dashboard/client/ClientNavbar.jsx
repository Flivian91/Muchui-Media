import ClientProfile from "./ClientProfile";
import ClientSearchBar from "./ClientSearchBar";

function ClientNavbar() {
  return (
    <nav className="flex items-center justify-between py-2 bg-surface px-2">
      <ClientSearchBar />
      <ClientProfile />
    </nav>
  );
}

export default ClientNavbar;
