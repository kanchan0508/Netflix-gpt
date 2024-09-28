import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import GptSlice from "./GptSlice";
import configSlice from "./configSlice";

const appStore  = configureStore({
    reducer: {
      user : userSlice,
      movie: movieSlice,
      gpt: GptSlice ,
      config: configSlice
    }  
})

export default appStore;