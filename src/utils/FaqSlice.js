import { createSlice } from "@reduxjs/toolkit";

const FaqSlice = createSlice({
    name:"faq",
    initialState :{
        activeIndex : null,
    },
    reducers:{
        toggleFaq: (state, action) =>{
            state.activeIndex =  state.activeIndex === action.payload ? null : action.payload;
        }
    }
})
export const {toggleFaq} = FaqSlice.actions;

export default FaqSlice.reducer