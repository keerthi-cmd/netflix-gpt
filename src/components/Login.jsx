import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utls/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-xl">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        <input
          type="text"
          placeholder="EmailAddress"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="FullName"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign up now" : "Already registered"}
        </p>
      </form>
    </div>
  );
};

export default Login;
