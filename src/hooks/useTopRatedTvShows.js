import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedTvShows } from "../utils/tvShowsSlice";

const useTopRatedTvShows = () => {
  const dispatch = useDispatch();

  const getTopRatedTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addTopRatedTvShows(json.results));
  };

  useEffect(() => {
    getTopRatedTvShows();
  }, []);
};

export default useTopRatedTvShows;
