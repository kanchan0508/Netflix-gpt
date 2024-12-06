import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    GptSearchResults: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptsearch: (state) => {
      state.GptSearchResults = !state.GptSearchResults;
    },
    addGptMovieResult: (state, action)=>{
      const {movieNames, movieResults} = action.payload;
       state.movieNames = movieNames;
       state.movieResults = movieResults;
    },
  },
});

export const { toggleGptsearch, addGptMovieResult } = GptSlice.actions;

export default GptSlice.reducer;
