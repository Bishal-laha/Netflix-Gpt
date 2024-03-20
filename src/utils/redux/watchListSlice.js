import {createSlice} from "@reduxjs/toolkit";

const watchListSlice = createSlice({
  name: "watchList",
  initialState: {
    movieDetails: [],
  },
  reducers: {
    addMovieDetails: (state, action) => {
      if (!state.movieDetails.find((item) => item.id === action.payload.id))
        state.movieDetails.push(action.payload);
    },
    removeMovieDetails: (state, action) => {
      const filter = state.movieDetails.find(
        (item) => item.id === action.payload
      );
      const pos = state.movieDetails.indexOf(filter);
      state.movieDetails.splice(pos, 1);
    },
    clearList: (state) => {
      state.movieDetails.length = 0;
    },
  },
});

export const {addMovieDetails, removeMovieDetails, clearList} =
  watchListSlice.actions;

export default watchListSlice.reducer;
