import { useEffect, useState } from "react";
import profile from "../../assets/images/img/profile.png";
import Category from "./Category";
import { supabase } from "../../supabase/supabaseClient";

function PageEditHomePage() {
  const [imageUrl, setImageUrl] = useState(profile); // Default to profile image
  const [name, setName] = useState(""); // Ensure initial empty string
  const [aboutInfo, setAboutInfo] = useState({});
  const [description, setDescription] = useState("");

  // Fetch User About information
  async function fetchAboutInfo() {
    const { data, error } = await supabase.from("AboutInfo").select("*");
    if (error) {
      console.log(error.message);
    }
    if (data && data.length > 0) {
      const info = data[0];
      setAboutInfo(info);
      setName(info.full_name || ""); // Ensure fallback if undefined
      setDescription(info.description || "");
      setImageUrl(info.image_url || profile);
    }
  }

  useEffect(() => {
    fetchAboutInfo();
  }, []);

  // Update function
  async function updateInfo(info) {
    const { error } = await supabase.from("AboutInfo").upsert(info);
    if (error) {
      console.log(error.message);
    }
    fetchAboutInfo();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const updatedInfo = {
      id: aboutInfo.id,
      full_name: name,
      description,
      image_url: imageUrl,
    };
    updateInfo(updatedInfo);
  }

  return (
    <div className="gap-3 flex flex-col">
      <h1 className="md:text-4xl text-2xl  font-bold text-text border-b-2 border-text-secondary/30 py-2 tracking-wide">
        Home Page
      </h1>
      <div className="border border-dashed border-text/80 rounded py-3 divide-y md:divide-x px-2 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex items-center flex-col gap-4">
          <h1 className="text-2xl font-semibold">About Me Section</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full items-center gap-5"
          >
            <div className="space-y-2 flex flex-col items-center">
              <img className="w-32 h-32 rounded-full" src={imageUrl} alt="Profile" />
              <input
                type="file"
                className="file:bg-accent file:border-none file:outline-none"
              />
            </div>
            <input
              className="text-sm outline-none w-full focus:ring-0 focus:outline-none border-dashed border-accent rounded"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className="text-sm outline-none w-full focus:ring-0 focus:outline-none border-dashed border-accent rounded"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="px-6 bg-green-500 py-2 text-white font-semibold rounded"
            >
              Update Now
            </button>
          </form>
        </div>
        <Category />
      </div>
    </div>
  );
}

export default PageEditHomePage;
