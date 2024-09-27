import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] pl-20 aspect-video w-screen absolute text-white bg-gradient-to-r from-black opacity-80'>
      <h1 className='font-bold text-3xl '>{title}</h1>
      <p className='w-1/3 mt-2'>{overview}</p>
      <button className=' mt-5 w-32 rounded-lg p-4 px-2 bg-white  text-black'>▶ Play</button>
      <button className='w-36 rounded-lg p-4 px-4 ml-3 bg-gray-700 opacity-60 text-white'>More info</button>
    </div>
  )
}

export default VideoTitle
