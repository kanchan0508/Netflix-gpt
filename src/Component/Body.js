import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import {onAuthStateChanged } from "firebase/auth";
import { logoutUser, setUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(setUser({
          uid: uid,
          email: email,
          name: displayName,
          photoURL: photoURL,
        }))
        // ...
      } else {
        dispatch(logoutUser())
      }
    });
  }, [])
  return <RouterProvider router={appRouter} />;
};

export default Body;
