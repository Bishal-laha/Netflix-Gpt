import {createSlice} from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGptPage: false,
    langActive: "English",
    gptSearchMoviesName: null,
    gptSearchMoviesDetails: null,
  },
  reducers: {
    toggleChangeGptPage: (state) => {
      state.toggleGptPage = !state.toggleGptPage;
    },
    toggleLangActive: (state, action) => {
      state.langActive = action.payload;
    },
    addGptSearchMovies: (state, action) => {
      const {gptSearchMoviesName, gptSearchMoviesDetails} = action.payload;
      state.gptSearchMoviesName = gptSearchMoviesName;
      state.gptSearchMoviesDetails = gptSearchMoviesDetails;
    },
    clearGptSearchMoviesDetails: (state) => {
      state.gptSearchMoviesDetails = null;
    },
  },
});

export const {
  toggleChangeGptPage,
  toggleLangActive,
  addGptSearchMovies,
  clearGptSearchMoviesDetails,
} = gptSlice.actions;
export default gptSlice.reducer;
