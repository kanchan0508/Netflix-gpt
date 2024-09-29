import { useEffect } from "react";
import { options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addNowPlayingmoies } from "../utils/movieSlice"; // Corrected the typo

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlaying = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json(); // Added 'await' here
       
      dispatch(addNowPlayingmoies(json.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
      
    }
  };

  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
