import { useEffect } from "react";
import { options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import {  addUpcoming } from "../utils/movieSlice"; // Corrected the typo

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcoming = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json(); // Added 'await' here
         console.log(json.results);
      dispatch(addUpcoming(json.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
      
    }
  };

  useEffect(() => {
    getUpcoming();
  }, []);
};

export default useUpcomingMovies;
