import {createSlice} from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "tvSeries",
  initialState: {
    airTodayTvSeriesData: null,
    onTheAirTvSeriesData:null,
    popularTvSeriesData:null,
    topRatedTvSeriesData:null,
    celebData: null,
  },
  reducers: {
    addAirTodayTvSeriesData: (state, action) => {
      state.airTodayTvSeriesData = action.payload;
    },
    addOnTheAirTvSeriesData: (state, action) => {
      state.onTheAirTvSeriesData = action.payload;
    },
    addPopularTvSeriesData: (state, action) => {
      state.popularTvSeriesData = action.payload;
    },
    addTopRatedTvSeriesData: (state, action) => {
      state.topRatedTvSeriesData = action.payload;
    },
    addCelebData: (state, action) => {
      state.celebData = action.payload;
    },
  },
});

export const {addAirTodayTvSeriesData,addOnTheAirTvSeriesData,addPopularTvSeriesData,addTopRatedTvSeriesData,addCelebData} = tvSlice.actions;
export default tvSlice.reducer;
