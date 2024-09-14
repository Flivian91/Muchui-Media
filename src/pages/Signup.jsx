import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import { Link } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient";
import EmailConfirmationModal from "../components/common/EmailConfirmationModel";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isModel, setIsModel] = useState(false);
  const [password, setPassword] = useState("");

  async function googleSignIn() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://muchui-media.vercel.app/client",
      },
    });
  }

  async function signUpNewUser(userName, userEmail, userPassword) {
    const { data, error } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
      options: {
        data: {
          userName: userName,
          role: email === "dflivo@gmail.com" ? "admin" : "client",
        },
      },
    });
    if (error) {
      alert(error.message);
    }

    if (data.user) {
      setIsModel(true);
      const { error: insertError } = await supabase
        .from("Users") // Your users table
        .insert([
          {
            id: data.user.id, // Use the Supabase user id as the unique identifier
            email: data.user.email, // Insert the user's email or other details
            username: data.user.user_metadata.userName,
          },
        ]);
      if (insertError) {
        console.log(insertError.message);
      }
    }

    // navigate("/signin");
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (password.length > 4 && email && name && password) {
      signUpNewUser(name, email, password);
      setName("");
      setEmail("");
      setPassword("");
    } else {
      console.log("Invalid User Information");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center md:w-1/2 w-full bg-gray-100 mx-1 ">
      <div className="bg-white px-5 pt-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4 flex flex-col gap-2">
          <h2 className="text-3xl tracking-wide text-text font-bold text-center">
            Sign Up
          </h2>
          <p className="text-center text-md font-light text-text tracking-wide">
            Let`s get started by creating free account
          </p>
          {isModel && (
            <EmailConfirmationModal
              isOpen={true}
              onClose={() => setIsModel(false)}
            />
          )}
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
          <div
            className={`border-[1.5px] rounded-[6px]  relative px-2 py-1 ${
              name.length > 4 ? "border-blue-500 " : " border-text-secondary/80"
            }`}
          >
            <input
              type="text"
              id="name"
              name="name"
              className="peer w-full px-3 py-2 border-0 font-mono tracking-wide rounded focus:outline-none focus:ring-0 focus:ring-primary"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label
              htmlFor="name"
              className={`block absolute text-lg font-semibold tracking-wide  transform -translate-y-1/2 peer-focus:top-0 ${
                name.length > 0 ? " -top-[2px] " : "top-1/2 "
              } px-1 bg-white transition-all duration-200 select-none peer-focus:text-blue-500  text-gray-700`}
            >
              Name
            </label>
          </div>
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
              } px-1  bg-white transition-all duration-200 select-none peer-focus:text-blue-500  text-gray-700`}
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
              } px-1 bg-white transition-all duration-200 select-none peer-focus:text-blue-500  text-gray-700`}
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
            Sign Up
          </button>
        </form>
        <div className="mt-2 text-center">
          <Link
            to="/signin"
            className="text-primary  transition-all duration-200 hover:underline"
          >
            Already have an account? Sign In
          </Link>
        </div>
        <div className="flex items-center justify-center my-2 gap-4 w-full">
          <p className="border-[0.5px] w-full"></p>
          <span className="mb-1 font-semibold text-text-secondary">or</span>
          <p className="border-[0.5px] w-full"></p>
        </div>
        <div>
          <button
            onClick={() => googleSignIn()}
            className="flex items-center justify-center transition-all duration-300 shadow-sm gap-2 w-full hover:border-blue-400 border py-2 rounded-[6px]"
          >
            <FcGoogle />{" "}
            <span className="text-text font-semibold tracking-wide">
              Sign up with google
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

export default SignUp;
