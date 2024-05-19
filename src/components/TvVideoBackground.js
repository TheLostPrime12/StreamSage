import React from "react";
import useTvTrailerVideo from "../hooks/useTvTrailerVideo";
import { useSelector } from "react-redux";

const TvVideoBackground = ({ tvId }) => {
  const tvTrailerVideo = useSelector((store) => store.tvShows?.tvTrailerVideo);

  useTvTrailerVideo(tvId);

  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          tvTrailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&rel=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default TvVideoBackground;
