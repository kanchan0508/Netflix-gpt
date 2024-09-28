import React from 'react'
import lang from '../utils/LanguageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center '>
      <form className='w-1/2 bg-black grid grid-cols-12'>
        <input className='col-span-9 p-4 m-4' type='text' placeholder={lang[langKey].GptSearchPlaceHolder} />
        <button className='bg-red-700 col-span-3 m-3 rounded-lg py-2 px-4 text-white'>{lang[langKey].search}</button>
      </form>
      
    </div>
  )
}

export default GptSearchBar
