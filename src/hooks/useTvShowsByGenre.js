import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTvShowsByGenre } from "../utils/tvShowsSlice";

const useTvShowsByGenre = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.tvShows.tvShowsGenre);

  const getTvShowsByGenre = async (genreId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addTvShowsByGenre({ genreId, tvShows: data.results }));
  };

  useEffect(() => {
    if (genres) {
      genres.forEach((genre) => {
        getTvShowsByGenre(genre.id);
      });
    }
  }, [genres]);
};

export default useTvShowsByGenre;
