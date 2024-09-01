import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`User Email: ${email} and Password: ${password}`);
    setEmail("");
    setPassword("");
  }

  return (
    <div className="min-h-screen flex items-center md:w-1/3 w-full justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form
          onSubmit={(e) => handleSubmit(e)}
          autoComplete="off"
          className="flex flex-col gap-4"
        >
          <div className=" flex flex-col gap-2">
            <label
              htmlFor="email"
              className="block text-text tracking-wide font-medium "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-text tracking-wide font-medium "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-sm hover:bg-primary-dark transition duration-200"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/signup" className="text-primary hover:underline">
            Don&apos;t have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
