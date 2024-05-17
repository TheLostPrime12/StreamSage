import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMoviesByGenre } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMoviesByGenre = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.movies.movieGenre);

  const getMoviesByGenre = async (genreId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addMoviesByGenre({ genreId, movies: data.results }));
  };

  useEffect(() => {
    if (genres) {
      genres.forEach((genre) => {
        getMoviesByGenre(genre.id);
      });
    }
  }, [genres]);
};

export default useMoviesByGenre;
