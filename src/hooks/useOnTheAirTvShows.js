import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addOnTheAirTvShows } from "../utils/tvShowsSlice";

const useOnTheAirTvShows = () => {
  const dispatch = useDispatch();

  const getOnTheAirTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addOnTheAirTvShows(json.results));
  };

  useEffect(() => {
    getOnTheAirTvShows();
  }, []);
};

export default useOnTheAirTvShows;
