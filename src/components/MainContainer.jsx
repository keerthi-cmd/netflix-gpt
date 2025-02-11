import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  return (
    <div className="md:pt-0 pt-[30%] bg-black">
      <VideoTitle {...mainMovie} />
      <VideoBackground {...mainMovie} />
    </div>
  );
};

export default MainContainer;
