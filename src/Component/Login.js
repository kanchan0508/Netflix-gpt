import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/userSlice";
import { AVATAR_PHOTO, BG_URL } from "../utils/Constant";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value,
   
    );
    setErrorMessage(message);

    if (message) return;

    //sign up and sign in
    if (!signInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: AVATAR_PHOTO
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser
            dispatch(setUser({
              uid: uid,
              email: email,
              name: displayName,
              photoURL: photoURL,
            }))
            
          }).catch((error) => {
            setErrorMessage(error);
          });
           
           

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage);
          // ..
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        
          // ...
        }) 
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage); 
        });
     
    }
  };
  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black mx-auto mt-40 right-0 left-0 text-white bg-opacity-80 rounded"
      >
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
        <button
          onClick={() => handleButtonClick()}
          className="w-full p-3 bg-red-600 rounded"
        >
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
