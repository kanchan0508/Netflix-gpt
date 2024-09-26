import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
          alt=""
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black mx-auto mt-40 right-0 left-0 text-white bg-opacity-80 rounded">
        <h1 className="py-4 text-3xl font-bold ">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <input
            className="p-4 w-full bg-gray-800 mb-5 bg-opacity-65"
            type="text"
            placeholder="First Name"
          />
        )}
        <input
          className="p-4 w-full bg-gray-800 mb-5 bg-opacity-65"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-4 w-full bg-gray-800 mb-5 bg-opacity-65"
          type="text"
          placeholder="password"
        />
        <button className="w-full p-3 bg-red-600 rounded">
          {signInForm ? "Sign In" : "Sign up"}
        </button>
        <p onClick={() => toggleSignInForm()} className="cursor-pointer mt-3">
          {signInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
