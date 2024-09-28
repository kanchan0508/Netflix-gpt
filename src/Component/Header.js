import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { logoutUser, setUser } from "../utils/userSlice";
import { AVATAR_PHOTO, LOGO, SupportedLanguages } from "../utils/Constant";
import { toggleGptsearch } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const showgptsearch = useSelector((store) => store.gpt.GptSearchResults);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          setUser({
            uid: uid,
            email: email,
            name: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(logoutUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  const handleBrowse = () => {
    dispatch(toggleGptsearch());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-[100%]  bg-gradient-to-b from-black z-40 flex justify-between">
      <img className=" w-48 ml-5  p-2 " src={LOGO} alt="" />
      {user && (
        <div className="flex">
          {showgptsearch && (
            <select
              onChange={handleLanguageChange}
              className="p-2 px-2 mt-6 m-2 bg-gray-900 text-white h-10"
            >
              {SupportedLanguages.map((lang) => (
                <option key={lang.identifier} value={lang?.identifier}>
                  {lang?.language}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleBrowse}
            className="mt-6  mr-4 px-4 h-10 bg-purple-700 text-white rounded-lg"
          >
            {" "}
            {showgptsearch ? "HomePage" : "Gpt Search"}
          </button>
          <img
            className="w-10 h-10 mt-5 mr-1"
            src={AVATAR_PHOTO}
            alt="profile"
          />
          <button
            onClick={() => handleSignout()}
            className="font-bold text-white"
          >
            (Sign-out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
