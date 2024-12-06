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
  // Selector to check if GPT Search results should be shown
  const showgptsearch = useSelector((store) => store.gpt.GptSearchResults);

  // Hooks to fetch movie data
  useNowplayingMovies();
  usePopularMovies();
  useTrending();
  useUpcomingMovies();

  return (
    <div className="w-screen">
      {/* Header section */}
      <Header />

      {/* Conditional rendering: Show GPT search or main content */}
      {showgptsearch ? (
        <GptSearch />
      ) : (
        <>
          {/* Main content containers */}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* FAQ Section at the bottom */}
      <FaqSection />
    </div>
  );
};

export default Browse;
