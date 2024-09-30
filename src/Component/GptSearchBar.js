import React, { useRef } from "react";
import lang from "../utils/LanguageConstant";
import { useSelector } from "react-redux";
import client from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchtext = useRef(null);

  const handleGptSearchClick = async () => {
    const gptQuery =
      `Act as a Movie Recommendation system and Suggest some movies for the Query : ${searchtext.current.value}. Only give the names of 2 movies, comma separated like the example result given ahead . Example result: Gadar, Sholey, Don, Golmal, Koi mil gya`;
      
    const getResult = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(getResult.choices);
  };
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchtext}
          className="col-span-9 p-4 m-4"
          type="text"
          placeholder={lang[langKey].GptSearchPlaceHolder}
        />
        <button
          className="bg-red-700 col-span-3 m-3 rounded-lg py-2 px-4 text-white"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
