import { useEffect, useState } from "react";
import { supabase } from "../../../supabase/supabaseClient";

/* eslint-disable react/prop-types */
function ClientWelcomeMessage() {
  const [user, setUser] = useState("");
  async function loadUser() {
    const { data } = await supabase.auth.getUser();
    setUser(data.user.user_metadata.name || "");
  }
  useEffect(function () {
    loadUser();
  }, []);
  function formatDate(date) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getDate();
    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${dayOfWeek} ${month}, ${year}`;
  }

  // Example usage:
  const today = new Date(); // You can replace this with any Date object

  return (
    <div className="flex flex-col mb-2">
      <h1 className="font-semibold tracking-wide text-text text-lg">
        🎊Welcom back,{" "}
        <span className="text-text font-bold font-serif tracking-wider">
          {user}
        </span>
      </h1>
      <p className="text-sm font-semibold tracking-wide text-text/80 pl-5">
        {formatDate(today)}
      </p>
    </div>
  );
}

export default ClientWelcomeMessage;
