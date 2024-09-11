import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";

function PageEditAboutPage() {
  const [homeData, setHomeData] = useState({});
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [biography, setBiography] = useState("");
  const [mission, setMission] = useState("");

  // Fetch data
  async function fetchData() {
    const { data, error } = await supabase.from("HomePage").select("*");
    if (error) {
      console.log(error.message);
    }
    if (data && data.length > 0) {
      const info = data[0];
      setHomeData(info);
      setTitle(info.title);
      setSubTitle(info.sub_title);
      setBiography(info.biography);
      setMission(info.mission);
    }
  }
  useEffect(function () {
    fetchData();
  }, []);

  // Handle data Update
  async function updateData(data) {
    const { error } = await supabase.from("HomePage").upsert(data);
    if (error) {
      console.log(error.message);
    }
    fetchData();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const updatedData = {
      id: homeData.id,
      title,
      sub_title: subTitle,
      biography,
      mission,
    };
    updateData(updatedData);
  }

  return (
    <div>
      <div className="">
        <h1 className="md:text-4xl text-2xl  font-bold text-text border-b-2 border-text-secondary/30 py-2 tracking-wide">
          About Page
        </h1>
        <div className="border border-dashed border-text/80 rounded py-3 px-2">
          <div className="flex items-center flex-col gap-4">
            <h1 className="text-2xl font-semibold">About Me Section</h1>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col w-full items-center gap-5"
            >
              <input
                className="text-sm outline-none w-full focus:ring-0 focus:outline-none border-dashed border-accent rounded"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                className="text-sm outline-none w-full focus:ring-0 focus:outline-none border-dashed border-accent rounded"
                value={subTitle}
                required
                onChange={(e) => setSubTitle(e.target.value)}
              />

              <div className="grid grid-cols-1 md:grid-cols-2  gap-4 w-full">
                <div className="flex flex-col gap-4 w-full">
                  <label className="text-xl font-semibold" htmlFor="biography">
                    Biography Part
                  </label>
                  <textarea
                    cols={30}
                    id="biography"
                    rows={12}
                    value={biography}
                    required
                    onChange={(e) => setBiography(e.target.value)}
                    className="text-sm outline-none w-full py-2 px-1  focus:ring-0 focus:outline-none border-dashed border-accent rounded"
                  ></textarea>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <label className="text-xl font-semibold" htmlFor="mission">
                    Mission Statement
                  </label>
                  <textarea
                    cols={30}
                    id="mission"
                    rows={12}
                    className="text-sm outline-none w-full py-2 px-1  focus:ring-0 focus:outline-none border-dashed border-accent rounded"
                    required
                    value={mission}
                    onChange={(e) => setMission(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="px-6 bg-green-500 py-2 text-white font-semibold rounded"
              >
                Update Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageEditAboutPage;
