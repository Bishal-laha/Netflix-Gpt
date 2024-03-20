import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import tvReducer from "./tvSlice";
import gptReducer from "./gptSlice";
import watchListReducer from "./watchListSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    tvSeries: tvReducer,
    gpt: gptReducer,
    watchList: watchListReducer,
  },
});

export default appStore;
