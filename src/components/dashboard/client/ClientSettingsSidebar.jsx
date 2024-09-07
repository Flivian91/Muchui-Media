import { NavLink } from "react-router-dom";

function ClientSettingsSidebar() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <NavLink
        to={"/client/settings/profile"}
        className={({ isActive }) =>
          isActive
            ? "shadow rounded bg-surface px-4 w-full  py-1 text-lg font-bold tracking-wide  text-text "
            : "bg-transparent px-4 w-full  py-1 text-lg font-bold tracking-wide  text-text"
        }
      >
        Profile
      </NavLink>
      <NavLink
        to={"/client/settings/customization"}
        className={({ isActive }) =>
          isActive
            ? "shadow rounded bg-surface px-4 w-full  py-1 text-lg font-bold tracking-wide  text-text "
            : "bg-transparent px-4 w-full  py-1 text-lg font-bold tracking-wide  text-text"
        }
      >
        Customization
      </NavLink>
      <NavLink
        to={"/client/settings/account"}
        className={({ isActive }) =>
          isActive
            ? "shadow rounded bg-surface px-4 w-full  py-1 text-lg font-bold tracking-wide  text-text "
            : "bg-transparent px-4 w-full  py-1 text-lg font-bold tracking-wide  text-text"
        }
      >
        Account
      </NavLink>
    </div>
  );
}

export default ClientSettingsSidebar;
