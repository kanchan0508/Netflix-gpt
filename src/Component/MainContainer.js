import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBckground from "./VideoBckground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie.nowPlaying);
  if (movies === null) return;

  const movie = movies[0]

  const { original_title, overview, id } = movie;

  return (
    <div className="w-screen">
      <VideoTitle title= {original_title} overview={overview} />
      <VideoBckground movieId={id} />
    </div>
  );
};

export default MainContainer;
