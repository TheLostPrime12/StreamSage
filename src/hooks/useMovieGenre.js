import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieGenre } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieGenre = () => {
  const dispatch = useDispatch();

  const getMovieGenre = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMovieGenre(json.genres));
  };

  useEffect(() => {
    getMovieGenre();
  }, []);
};

export default useMovieGenre;
