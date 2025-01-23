import { useState } from "react";
import { IMG_CDN_URL } from "../utls/constants";
import moment from "moment";
import Modal from "./Modal";

const MovieCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const {
    poster_path,
    original_title,
    release_date,
    id,
    overview,
    original_language,
  } = props;
  // useMovieInfo(id);
  //useMovieTrailer(id);
  if (!poster_path) return null;
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const formattedDate = moment(release_date).format("DD MMM YYYY");
  return (
    <div className="md:w-[100%] w-36  bg-white">
      {showModal && (
        <Modal
          closeModal={closeModal}
          id={id}
          title={original_title}
          overview={overview}
          language={original_language}
          releaseDate={formattedDate}
        />
      )}
      <div className="">
        <img alt="Movie Card" src={IMG_CDN_URL + poster_path} />
      </div>
      <div className="p-2 text-black">
        <h2
          className="font-bold hover:underline cursor-pointer"
          onClick={openModal}
        >
          {original_title}
        </h2>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
