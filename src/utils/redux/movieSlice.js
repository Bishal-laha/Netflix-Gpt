import {createSlice} from "@reduxjs/toolkit";

const nowPlayingMovieSlice = createSlice({
  name: "movie",
  initialState: {
    trailerData: null,
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addTrailerData: (state, action) => {
      state.trailerData = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerData,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = nowPlayingMovieSlice.actions;
export default nowPlayingMovieSlice.reducer;
