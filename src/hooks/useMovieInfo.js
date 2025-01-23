import { useEffect } from "react";
import { API_OPTIONS } from "../utls/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utls/movieSlice";
const useMovieInfo = (movieId) => {
  const dispatch = useDispatch();
  // const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getMovieInfo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/credits",
      API_OPTIONS
    );
    const json = await data.json();
  };
  useEffect(() => {
    getMovieInfo();
  }, []);
};

export default useMovieInfo;
//Not used
