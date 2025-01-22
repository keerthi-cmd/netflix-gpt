import React from "react";
import { IMG_CDN_URL } from "../utls/constants";
import moment from "moment";
const MovieCard = ({ poster_path, original_title, release_date }) => {
 
  if (!poster_path) return null;
  const formattedDate = moment(release_date).format("DD MMM YYYY");
  return (
    <div className="md:w-[100%] w-36  bg-white">
      <div className="">
        <img alt="Movie Card" src={IMG_CDN_URL + poster_path} />
      </div>
      <div className="p-2 text-black">
        <h2 className="font-bold">{original_title}</h2>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
