import profile from "../../../assets/images/img/profile-2.jpg";
import { GrNotification } from "react-icons/gr";
import CreatePost from "../../common/CreatePost";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../../supabase/supabaseClient";
function ClientProfile() {
  const [user, setUser] = useState("");
  async function loadUser() {
    const { data } = await supabase.auth.getUser();
    setUser(data.user.user_metadata || "");
  }
  useEffect(function () {
    loadUser();
  }, []);
  return (
    // Change that Gap later
    <div className="flex items-center gap-4 px-2">
      <CreatePost>Create Post</CreatePost>
      <Link
        to={"/client/notifications"}
        className="relative p-2 rounded-md bg-background"
      >
        <GrNotification />
        <span className="p-[5px] absolute bg-secondary -top-1 right-0 rounded-full"></span>
      </Link>
      <Link
        to={"/client/settings/profile"}
        className="flex-grow hidden flex-col gap-0 lg:flex"
      >
        <h1 className="text-sm font-bold tracking-wide text-text">
          {user.name}
        </h1>
        <span className="text-[10px] font-semibold text-text-secondary tracking-wide">
          {user.role}
        </span>
      </Link>
      <Link to={"/client/settings/profile"}>
        <img
          className="w-10 h-10 rounded-full border-2 border-secondary"
          src={profile}
          alt="Client profile image"
        />
      </Link>
    </div>
  );
}

export default ClientProfile;
