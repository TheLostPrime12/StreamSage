import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import TvVideoBackground from "./TvVideoBackground";
import useAiringTodayTvShows from "../hooks/useAiringTodayTvShows";
import useOnTheAirTvShows from "../hooks/useOnTheAirTvShows";
import usePopularTvShows from "../hooks/usePopularTvShows";
import useTvShowsGenre from "../hooks/useTvShowsGenre";
import useTvShowsByGenre from "../hooks/useTvShowsByGenre";
import useTopRatedTvShows from "../hooks/useTopRatedTvShows";

const TvMainContainer = () => {

  useTopRatedTvShows();
  useAiringTodayTvShows();
  useOnTheAirTvShows();
  usePopularTvShows();
  useTvShowsGenre();
  useTvShowsByGenre();

  const TvShows = useSelector((store) => store.tvShows?.topRatedTvShows);

  if (!TvShows) return null;

  const mainTvShow = TvShows[1];

  const { original_name, overview, id } = mainTvShow;

  return (
    <div>
      <VideoTitle title={original_name} overview={overview} />
      <TvVideoBackground tvId={id} />
    </div>
  );
};

export default TvMainContainer;
