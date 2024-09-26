import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  

  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };

  const handleButtonClick = () => {
        const message = checkValidateData(email.current.value, password.current.value, name.current.value)
        console.log(email.current.value, password.current.value)
        setErrorMessage(message)
        }
  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
          alt=""
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black mx-auto mt-40 right-0 left-0 text-white bg-opacity-80 rounded">
        <h1 className="py-4 text-3xl font-bold ">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <input
          ref={name}
            className="p-4 w-full bg-gray-800 mb-5 bg-opacity-65"
            type="text"
            placeholder="First Name"
          />
        )}
        <input
        ref={email}
          className="p-4 w-full bg-gray-800 mb-5 bg-opacity-65"
          type="text"
          placeholder="Email Address"
        />
        <input
        ref={password}
          className="p-4 w-full bg-gray-800 mb-5 bg-opacity-65"
          type="text"
          placeholder="password"
        />
        <p className="text-red-500 font-bold py-2">{errorMessage}</p>
        <button onClick={() => handleButtonClick()} className="w-full p-3 bg-red-600 rounded">
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
