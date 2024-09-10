import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); // To track the authenticated user
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      signInUser(email, password);
    }
  }
  async function googleSignIn() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  async function signInUser(userEmail, userPassword) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    });

    if (error) {
      alert(error.message);
      setEmail("");
      setPassword("");
    } else {
      setUser(data.user); // Store the authenticated user
      setEmail("");
      setPassword("");
    }
  }

  useEffect(() => {
    if (user) {
      if (user.email === "dflivo@gmail.com") {
        console.log("Navigating to /admin");
        navigate("/admin");
      } else {
        console.log("Navigating to /client");
        navigate("/client");
      }
    }
  }, [user, navigate]); // Run useEffect when 'user' or 'navigate' changes

  return (
    <div className="min-h-screen flex items-center md:w-1/3 w-full justify-center bg-gray-100">
      <div className="bg-white px-5 pt-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
        <h2 className="text-3xl tracking-wide text-text font-bold text-center">
          Sign In
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div
            className={`border-[1.5px] rounded-[6px]  relative px-2 py-1 ${
              email.length > 4
                ? "border-blue-500 "
                : " border-text-secondary/80"
            }`}
          >
            <input
              type="email"
              id="email"
              name="email"
              className="peer w-full px-3 py-2 border-0 font-mono tracking-wide rounded focus:outline-none focus:ring-0 focus:ring-primary"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className={`block absolute text-lg font-semibold tracking-wide  transform -translate-y-1/2 peer-focus:top-0 ${
                email.length > 0 ? " -top-[2px] " : "top-1/2 "
              } px-1  bg-white transition-all duration-200 peer-focus:text-blue-500 select-none  text-gray-700`}
            >
              Email
            </label>
          </div>
          <div
            className={`border-[1.5px] rounded-[6px] flex  relative px-2 py-1 ${
              password.length > 4
                ? "border-blue-500 "
                : " border-text-secondary/80"
            }`}
          >
            <input
              type={showPass ? "text" : "password"}
              id="password"
              name="password"
              className="peer w-full px-3 py-2 border-0 font-mono tracking-wide rounded focus:outline-none focus:ring-0 focus:ring-primary"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="password"
              className={`block absolute text-lg font-semibold tracking-wide  transform -translate-y-1/2 peer-focus:top-0 ${
                password.length > 0 ? " -top-[2px] " : "top-1/2 "
              } px-1 bg-white transition-all duration-200 peer-focus:text-blue-500 select-none  text-gray-700`}
            >
              Password
            </label>
            <button
              type="button"
              role="button"
              onClick={() => setShowPass((prev) => !prev)}
              className="px-2 text-gray-500 transform hover:scale-105 hover:text-gray-600 transition-all duration-300 "
            >
              {showPass ? (
                <GrFormViewHide fontSize={24} />
              ) : (
                <GrFormView fontSize={24} />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-[6px] text-md tracking-wide font-bold  hover:bg-primary-dark transition duration-200"
          >
            Sign In
          </button>
        </form>
        <div className="text-center">
          <Link
            to="/signup"
            className="text-primary  transition-all duration-200 hover:underline"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </div>
        <div>
          <button
            onClick={() => googleSignIn()}
            className="flex items-center justify-center transition-all duration-300 shadow-sm gap-2 w-full hover:border-blue-400 border py-2 rounded-[6px]"
          >
            <FcGoogle />{" "}
            <span className="text-text font-semibold tracking-wide">
              Sign in with google
            </span>
          </button>
        </div>
        <div className="mt-3 pb-4">
          <p className="text-sm text-center text-text-secondary font-semibold tracking-wider">
            By signing up to create an account i accept Company`s{" "}
            <Link className="text-blue-500 font-bold hover:underline focus:underline-offset-1 transition-all duration-200">
              Terms of Use and Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
