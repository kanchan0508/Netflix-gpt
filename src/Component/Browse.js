import React from "react";
import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrending from "../hooks/useTrending";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import FaqSection from "./FaqSection";

const Browse = () => {
  const showgptsearch = useSelector((store) => store.gpt.GptSearchResults);

  useNowplayingMovies();
  usePopularMovies();
  useTrending();
  useUpcomingMovies();
  return (
    <div className="w-screen">
      <Header />
      {showgptsearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      <FaqSection />
    </div>
  );
};

export default Browse;
