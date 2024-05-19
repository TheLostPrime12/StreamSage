import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addAiringTodayTvShows } from "../utils/tvShowsSlice";

const useAiringTodayTvShows = () => {
  const dispatch = useDispatch();

  const getAiringTodayTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addAiringTodayTvShows(json.results));
  };

  useEffect(() => {
    getAiringTodayTvShows();
  }, []);
};

export default useAiringTodayTvShows;
