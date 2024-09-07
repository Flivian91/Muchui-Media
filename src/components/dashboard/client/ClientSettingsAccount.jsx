function ClientSettingsAccount() {
  return (
    <div className="flex flex-col gap-4">
      <form
        autoComplete="off"
        className="flex flex-col gap-4 shadow rounded px-2 py-4 bg-surface"
      >
        <h1 className="text-2xl font-bold tracking-wide text-text">
          Account Management
        </h1>
        <div className="flex flex-col gap-1 px-2">
          <label
            className="text-lg font-semibold text-text-secondary"
            htmlFor="currentPassword"
          >
            Current Password
          </label>
          <input
            className="text-text font-mono text-lg py-1 border rounded focus:ring-0 ring-0 focus:border border-text-secondary/90  focus:border-secondary transition-all duration-200"
            type="password"
            id="currentPassword"
            required
          />
        </div>
        <div className="flex flex-col gap-1 px-2">
          <label
            className="text-lg font-semibold text-text-secondary"
            htmlFor="newPassword"
          >
            New Password
          </label>
          <input
            className="text-text font-mono text-lg py-1 border rounded focus:ring-0 ring-0 focus:border border-text-secondary/90  focus:border-secondary transition-all duration-200"
            type="password"
            id="newPassword"
            required
          />
        </div>
        <div className="flex flex-col gap-1 px-2">
          <label
            className="text-lg font-semibold text-text-secondary"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="text-text font-mono text-lg py-1 border rounded focus:ring-0 ring-0 focus:border border-text-secondary/90  focus:border-secondary transition-all duration-200"
            type="password"
            id="confirmPassword"
            required
          />
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

export default ClientSettingsAccount;
