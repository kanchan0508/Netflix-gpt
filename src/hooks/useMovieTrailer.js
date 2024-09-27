import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { options } from "../utils/Constant";
import { useEffect } from "react";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();

    const getMovieTrailer = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', options)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const json = await response.json(); // Added 'await' here
           console.log(json.results);

           const filterData = json.results.filter((video) => video.type === "Trailer")
           const trailer = filterData.length ? filterData[0] : json.results[0]
        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.error("Failed to fetch now playing movies:", error);
        
      }
    };
  
    useEffect(() => {
      getMovieTrailer();
    }, []);
}

export default useMovieTrailer