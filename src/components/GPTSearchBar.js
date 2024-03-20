import {useDispatch, useSelector} from "react-redux";
import GptLang from "../utils/langConstant/GPT_Lang_Constants";
import {useRef} from "react";
import {MOVIE_API_NOW_PLAYING} from "../utils/Constants";
import {addGptSearchMovies,clearGptSearchMoviesDetails} from "../utils/redux/gptSlice";
// import openAi from "../utils/OpenAi";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  //This is for getting the search result value
  const searchText = useRef(null);
  //This is for language change
  const currLangKey = useSelector((store) => store?.gpt?.langActive);

  //This is after gpt search, all text one by one will be given and fetched their data
  const fetchTmdbMovies = async (searchMovieName) => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchMovieName +
        "&include_adult=false&language=en-US&page=1",
      MOVIE_API_NOW_PLAYING
    );
    const jsonData = await fetchData.json();
    return jsonData.results;
  };

  const handleGptSearch = async () => {
    const gptResult =
      "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Koi Mil Gaya, Padosan";
    const gptMovie = gptResult.split(",");
    // console.log(gptMovie);
    const promiseArray = gptMovie.map((item) => fetchTmdbMovies(item));
    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);
    dispatch(
      addGptSearchMovies({
        gptSearchMoviesName: gptMovie,
        gptSearchMoviesDetails: tmdbResults,
      })
    );
  };
  // const handleGptSearch = async () => {
  //This is to get the result from chatGpt api
  // const gptQuery =
  //   "Act as a Movie Recommended System and suggest some movies for the query: " +
  //   searchText.current.value +
  //   "only give me top 10 movies name, comma separated like the example given ahead. Example Result: Koi Mil Gaya, Sholay, Don, etc.";
  // const chatCompletion = await openAi.chat.completions.create({
  //   messages: [{role: "user", content: gptQuery}],
  //   model: "gpt-3.5-turbo",
  // });

  // console.log(chatCompletion);
  // };

  return (
    //This includes search bar in Chat gpt page
    <div className="w-[100%]">
      <h1 className="text-white text-[1.2rem] lg:text-[2rem] font-bold w-[100%] lg:w-[60%] ml-5 lg:mx-auto mt-[110%] lg:mt-[12%]">
        {GptLang[currLangKey].title}
      </h1>
      <div className="lg:w-[64%] ml-5 lg:mx-auto mt-2">
        <form
          className="flex flex-col gap-4 lg:grid lg:grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            //THIS lang[dynamicKey] is used for dynamic
            placeholder={GptLang[currLangKey].placeHolderFormInput}
            className="lg:col-span-7 w-[95%] lg:w-[100%] p-[0.8rem] rounded-md mr-5 text-[0.8rem] lg:text-[1rem] text-white bg-transparent outline outline-1 outline-slate-600 lg:rounded-sm "
          />
          <div className="lg:col-span-5">
            <button
              className="text-white font-medium bg-red-600 p-[0.5rem] text-[1rem] mr-3 rounded-md hover:bg-red-700 hover:opacity-97 duration-300 hover:duration-300 lg:text-[1.5rem]"
              onClick={handleGptSearch}
            >
              {GptLang[currLangKey].search}
            </button>
            <button
              className="text-white font-medium bg-red-600 p-[0.5rem] text-[1rem] rounded-md hover:bg-red-700 hover:opacity-97 duration-300 hover:duration-300 lg:text-[1.5rem]"
              onClick={() => {
                dispatch(clearGptSearchMoviesDetails());
              }}
            >
              {GptLang[currLangKey].clear}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
