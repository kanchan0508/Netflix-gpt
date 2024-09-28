import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlaying : null,
        trailerVideo : null, 
    },
    reducers: {
         addNowPlayingmoies: (state, action) =>{
             state.nowPlaying = action.payload
         },
         addPopular: (state, action) =>{
             state.Popular = action.payload
         },
         addTrending: (state, action) =>{
             state.Trending = action.payload
         },
         addUpcoming: (state, action) =>{
             state.Upcoming = action.payload
         },

         addTrailerVideo: (state, action) =>{
            state.trailerVideo = action.payload
         },
    },
})

export const {addNowPlayingmoies,addPopular, addTrending,addUpcoming, addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer