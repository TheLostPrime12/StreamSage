import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import tvShowsReducer from "./tvShowsSlice";

const appStore = configureStore({
  reducer: {
    // Add reducers here
    user: userReducer,
    movies: moviesReducer,
    tvShows: tvShowsReducer,
  },
});

export default appStore;
