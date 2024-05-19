import React from "react";
import ListTemplate from "./ListTemplate";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const genreMovieList = useSelector((store) => store.movies.movieGenre);
  const moviesByGenre = useSelector((store) => store.movies.moviesByGenre);

  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-56 relative z-20 px-6">
          <ListTemplate
            title={"Now Playing Movies"}
            movies={movies.nowPlayingMovies}
          />
          <ListTemplate
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <ListTemplate title={"Popular Movies"} movies={movies.popularMovies} />
          <ListTemplate title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          {genreMovieList &&
            genreMovieList.map((genre) => (
              <ListTemplate
                key={genre.id}
                title={genre.name + " Movies"}
                movies={moviesByGenre[genre.id]}
              />
            ))}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
