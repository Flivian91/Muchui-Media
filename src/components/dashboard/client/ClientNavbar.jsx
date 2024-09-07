import { BiMenu, BiSearch } from "react-icons/bi";
import ClientProfile from "./ClientProfile";
import ClientSearchBar from "./ClientSearchBar";

function ClientNavbar() {
  return (
    <nav className="flex items-center justify-between py-2 gap-2 bg-surface px-2">
      <div className="flex items-center gap-4 md:hidden">
        <button className="p-2 bg-background rounded">
          <BiMenu fontSize={22} />
        </button>
        <button className="sm:hidden p-2 bg-background rounded">
          <BiSearch fontSize={22} />
        </button>
      </div>

      <ClientSearchBar />
      <ClientProfile />
    </nav>
  );
}

export default ClientNavbar;
