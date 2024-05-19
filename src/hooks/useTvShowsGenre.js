import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTvShowsGenre } from "../utils/tvShowsSlice";

const useTvShowsGenre = () => {
  const dispatch = useDispatch();

  const getTvShowsGenre = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/tv/list?language=en",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTvShowsGenre(json.genres));
  };

  useEffect(() => {
    getTvShowsGenre();
  }, []);
};

export default useTvShowsGenre;
