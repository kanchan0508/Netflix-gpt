import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    GptSearchResults: false,
  },
  reducers: {
    toggleGptsearch: (state) => {
      state.GptSearchResults = !state.GptSearchResults;
    },
  },
});

export const { toggleGptsearch } = GptSlice.actions;

export default GptSlice.reducer;
