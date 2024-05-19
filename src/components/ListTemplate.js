import React from "react";
import CardTemplate from "./CardTemplate";

const ListTemplate = ({ title, movies }) => {
  return (
    <div className="px-4 text-white">
      <h1 className="text-2xl font-semibold py-4 ">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-none scroll-smooth">
        <div className="flex">
          {movies?.map((movie) => (
            <CardTemplate key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListTemplate;
