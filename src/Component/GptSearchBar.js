import React, { useRef } from "react";
import lang from "../utils/LanguageConstant";
import { useDispatch, useSelector } from "react-redux";
import { AIChatSession } from "../utils/Aimodel";
import { options } from "../utils/Constant";
import { addGptMovieResult } from "../utils/GptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchtext = useRef(null);

  // Function to search movies in TMDB
  const SearchMoviesInTmdb = async (movie) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          movie
        )}&include_adult=false&language=en-US&page=1`,
        options
      );

      const json = await data.json(); // Await the JSON response
      return json.results || []; // Return results or an empty array if none
    } catch (error) {
      console.error("Error fetching data from TMDB:", error);
      return []; // Return an empty array in case of an error
    }
  };

  const handleGptSearchClick = async () => {
    const gptQuery = `Act as a Movie Recommendation system and Suggest some movies for the Query : ${searchtext.current.value}. Only give the names of 5 movies, comma separated like the example result given ahead . Example result: Gadar, Sholey, Don, Golmal, Koi mil gya`;

    try {
      // Get GPT response
      const result = await AIChatSession.sendMessage(gptQuery);
      const gptResult = result?.response?.text()?.split(",").map((movie) => movie.trim());


      // Search movies in TMDB
      const promiseArray = gptResult.map((movie) => SearchMoviesInTmdb(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(addGptMovieResult({movieNames: gptResult, movieResults: tmdbResults}))

    } catch (error) {
      console.error("Error during GPT or TMDB processing:", error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchtext}
          className="col-span-9 p-4 m-4 bg-gray-800 text-white rounded-lg"
          type="text"
          placeholder={lang[langKey].GptSearchPlaceHolder}
        />
        <button
          className="bg-red-700 col-span-3 m-3 rounded-lg py-2 px-4 text-white hover:bg-red-600 transition-opacity duration-200"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
