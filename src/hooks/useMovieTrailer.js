import { useEffect } from "react";
import { API_OPTIONS } from "../utls/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utls/movieSlice";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData?.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
    //   const data1 = await fetch(
    //     "https://api.themoviedb.org/3/movie/539972/credits",
    //     API_OPTIONS
    //   );
    //   const json1 = await data1.json();
    //   console.log(json1);
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
