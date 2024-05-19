import { createSlice } from "@reduxjs/toolkit";

const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    tvTrailerVideo: null,
    showTvShows: false,
    topRatedTvShows: null,
    airingTodayTvShows: null,
    onTheAirTvShows: null,
    popularTvShows: null,
    tvShowsGenre: null,
    tvShowsByGenre: {},
  },
  reducers: {
    toggleShowTvShows: (state) => {
      state.showTvShows = !state.showTvShows;
    },
    addTvTrailerVideo: (state, action) => {
      state.tvTrailerVideo = action.payload;
    },
    addTopRatedTvShows: (state, action) => {
      state.topRatedTvShows = action.payload;
    },
    addAiringTodayTvShows: (state, action) => {
      state.airingTodayTvShows = action.payload;
    },
    addOnTheAirTvShows: (state, action) => {
      state.onTheAirTvShows = action.payload;
    },
    addPopularTvShows: (state, action) => {
      state.popularTvShows = action.payload;
    },
    addTvShowsGenre: (state, action) => {
      state.tvShowsGenre = action.payload;
    },
    addTvShowsByGenre: (state, action) => {
      const { genreId, tvShows } = action.payload;
      state.tvShowsByGenre[genreId] = tvShows;
    },
  },
});

export const {
  toggleShowTvShows,
  addTopRatedTvShows,
  addTvTrailerVideo,
  addAiringTodayTvShows,
  addOnTheAirTvShows,
  addPopularTvShows,
  addTvShowsGenre,
  addTvShowsByGenre,
} = tvShowsSlice.actions;
export default tvShowsSlice.reducer;
