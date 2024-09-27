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
         addTrailerVideo: (state, action) =>{
            state.trailerVideo = action.payload
         },
    },
})

export const {addNowPlayingmoies, addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer