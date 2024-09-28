import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { logoutUser, setUser } from "../utils/userSlice";
import { AVATAR_PHOTO, LOGO } from '../utils/Constant';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)


  const handleSignout = () =>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
  }

  
  useEffect(()=>{
   const unSubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(setUser({
          uid: uid,
          email: email,
          name: displayName,
          photoURL: photoURL,
        }))
        navigate("/browse")
      } else {
        dispatch(logoutUser())
        navigate("/")
      }
    });

    return () => unSubscribe()
  }, [])
  return (
    <div className='absolute w-[100%]  bg-gradient-to-b from-black z-40 flex justify-between'>
    <img className=' w-48 ml-5  p-2 ' src={LOGO} alt='' />
    { user && <div className='flex'>
      <img className='w-10 h-10 mt-5 mr-1' src={AVATAR_PHOTO} alt='profile' />
      <button onClick={()=> handleSignout()} className='font-bold text-white' >(Sign-out)</button>
    </div> }
    </div>
  )
}

export default Header
