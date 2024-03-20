import {useSelector} from "react-redux";
import {BrowseMovieList} from "./Index";

const GPTSearchResult = () => {
  const {gptSearchMoviesName, gptSearchMoviesDetails} = useSelector(
    (store) => store?.gpt
  );
  if (!gptSearchMoviesName || !gptSearchMoviesDetails) return null;

  return (
    <div className="w-[100%] mt-5 mb-5 ml-3 px-2 cursor-pointer lg:w-[64%] lg:mx-auto lg:mt-8 lg:px-5">
      {gptSearchMoviesName.map((item, id) => (
        <BrowseMovieList
          key={item}
          headingTitle={item}
          movieList={gptSearchMoviesDetails[id]}
        />
      ))}
    </div>
  );
};

export default GPTSearchResult;
