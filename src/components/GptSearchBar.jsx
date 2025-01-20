import { useSelector } from "react-redux";
import lang from "../utls/languageConstants";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  return (
    <div className="pt-[20%] flex justify-center">
      <form action="" className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg m-4">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
