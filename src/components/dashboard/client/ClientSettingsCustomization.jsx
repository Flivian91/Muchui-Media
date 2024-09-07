function ClientSettingsCustomization() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold tracking-wide text-text">
          Appearance
        </h1>
        <div className="flex flex-col lg:flex-row gap-2 items-center justify-between">
          <div className="flex items-center gap-2 bg-surface shadow rounded px-4 py-5 w-64">
            <input
              className="cursor-pointer "
              type="radio"
              name="mode"
              id="light"
              checked
            />
            <label
              className="text-text font-semibold tracking-wide select-none"
              htmlFor="light"
            >
              Light Mode(Default)
            </label>
          </div>
          <div className="flex items-center gap-2 bg-surface shadow rounded px-4 py-5 w-64">
            <input
              className="cursor-pointer "
              type="radio"
              name="mode"
              id="dark"
            />
            <label
              className="text-text font-semibold tracking-wide select-none"
              htmlFor="dark"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientSettingsCustomization;
