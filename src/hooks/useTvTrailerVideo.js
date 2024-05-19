import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants';
import { addTvTrailerVideo } from '../utils/tvShowsSlice';

const useTvTrailerVideo = (tvId) => {

const dispatch = useDispatch();
const getTvVideos = async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/tv/" +
      tvId +
      "/videos?language=en-US",
    API_OPTIONS
  );
  const json = await data.json();

  const filterData = json.results.filter(
    (video) => video.type === "Trailer"
  );
  const trailer = filterData.length ? filterData[0] : json.results[0];
  dispatch(addTvTrailerVideo(trailer));
};

useEffect(() => {
  getTvVideos();
}, [tvId]);

}

export default useTvTrailerVideo
