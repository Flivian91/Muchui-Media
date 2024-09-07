import img from "../../../assets/images/img/profile.png";
function ClientSettingsProfile() {
  return (
    <div className="flex flex-col gap-4">
      <form className="flex flex-col gap-4 shadow rounded px-2 py-4 bg-surface">
        <h1 className="text-2xl font-bold tracking-wide text-text">
          User Information
        </h1>
        <div className="flex flex-col gap-1 px-2">
          <label
            className="text-lg font-semibold text-text-secondary"
            htmlFor="name"
          >
            FullName
          </label>
          <input
            className="text-text font-mono text-lg py-1 border rounded focus:ring-0 ring-0 focus:border border-text-secondary/90  focus:border-secondary transition-all duration-200"
            type="text"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-1 px-2">
          <label
            className="text-lg font-semibold text-text-secondary"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="text-text font-mono text-lg py-1 border rounded focus:ring-0 ring-0 focus:border border-text-secondary/90  focus:border-secondary transition-all duration-200"
            type="email"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-1 px-2">
          <label
            className="text-lg font-semibold text-text-secondary"
            htmlFor="bio"
          >
            Bio
          </label>
          <textarea
            className="text-text font-mono text-lg py-1 border rounded focus:ring-0 ring-0 focus:border border-text-secondary/90  focus:border-secondary transition-all duration-200"
            type="text"
            id="name"
          ></textarea>
        </div>
        <div className="flex flex-col gap-1 px-2">
          <label
            className="text-lg font-semibold text-text-secondary"
            htmlFor="image"
          >
            Upload Profile
          </label>
          <div className="flex  items-center gap-5">
            <img className="w-16 h-16" src={img} alt="" />
            <input
              className="file:bg-secondary file:border-none file:rounded file:text-white file:font-bold file:px-2"
              type="file"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <button
            type="submit"
            className="bg-green-600 py-1 rounded text-xl font-mono text-white my-4 w-full"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default ClientSettingsProfile;
