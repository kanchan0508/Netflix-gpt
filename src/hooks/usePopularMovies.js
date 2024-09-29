import { useEffect } from "react";
import { options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/movieSlice"; // Corrected the typo

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopular = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json(); // Added 'await' here
       
      dispatch(addPopular(json.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
      
    }
  };

  useEffect(() => {
    getPopular();
  }, []);
};

export default usePopularMovies;
