import { useDispatch } from "react-redux";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utls/constants";
import { clearGptMovieResult } from "../utls/gptSlice";

const GPTSearch = () => {
  const dispatch = useDispatch();
  dispatch(clearGptMovieResult());
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover w-screen bg-fixed"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
