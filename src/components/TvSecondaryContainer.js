import React from "react";
import { useSelector } from "react-redux";
import ListTemplate from "./ListTemplate";

const TvSecondaryContainer = () => {
  const tvShows = useSelector((store) => store.tvShows);

  const genreTvShowsList = useSelector((store) => store.tvShows.tvShowsGenre);
  const tvShowsByGenre = useSelector((store) => store.tvShows.tvShowsByGenre);

  return (
    tvShows && (
      <div className="bg-black">
        <div className="-mt-56 relative z-20 px-6">
          <ListTemplate
            title={"Airing Today TV Shows"}
            movies={tvShows.airingTodayTvShows}
          />
          <ListTemplate
            title={"Popular TV Shows"}
            movies={tvShows.popularTvShows}
          />
          <ListTemplate
            title={"Top Rated TV Shows"}
            movies={tvShows.topRatedTvShows}
          />
          <ListTemplate
            title={"On The Air TV Shows"}
            movies={tvShows.onTheAirTvShows}
          />
          {genreTvShowsList &&
            genreTvShowsList.map((genre) => (
              <ListTemplate
                key={genre.id}
                title={genre.name + " TV Shows"}
                movies={tvShowsByGenre[genre.id]}
              />
            ))}
        </div>
      </div>
    )
  );
};

export default TvSecondaryContainer;
