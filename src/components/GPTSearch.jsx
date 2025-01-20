
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utls/constants";
const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="h-screen object-cover w-screen" src={BG_URL} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
