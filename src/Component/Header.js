import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)


  const handleSignout = () =>{
    signOut(auth).then(() => {
       navigate("/")
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
  }
  return (
    <div className='absolute w-screen  bg-gradient-to-b from-black z-40 flex justify-between'>
    <img className=' w-48  ml-10 p-2 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='' />
    { user && <div className='flex'>
      <img className='w-10 h-10 mt-5 mr-1' src={user.photoURL ? user.photoURL : "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"} alt='profile' />
      <button onClick={()=> handleSignout()} className='font-bold text-white' >(Sign-out)</button>
    </div> }
    </div>
  )
}

export default Header
