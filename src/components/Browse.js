import { useSelector } from "react-redux";
import useMovieGenre from "../hooks/useMovieGenre";
import useMoviesByGenre from "../hooks/useMoviesByGenre";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Footer from "./Footer";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import TvMainContainer from "./TvMainContainer";
import TvSecondaryContainer from "./TvSecondaryContainer";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useMovieGenre();
  useMoviesByGenre();

  const showTvShows = useSelector((store) => store.tvShows.showTvShows);

  return (
    <div>
      <Header />
      {showTvShows ? (
        <>
          <TvMainContainer />
          <TvSecondaryContainer />
        </>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Browse;
