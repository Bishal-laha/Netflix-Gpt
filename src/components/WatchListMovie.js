import {useDispatch} from "react-redux";
import {MOVIE_CARD_IMG} from "../utils/Constants";
import {removeMovieDetails} from "../utils/redux/watchListSlice";

const WatchListMovie = ({watchListMovieDetails}) => {
  const dispatch = useDispatch();

  const handleRemoveList = (itemId) => {
    dispatch(removeMovieDetails(itemId));
  };
  if (!watchListMovieDetails) return null;

  return (
    <div className="flex flex-col lg:flex-row w-[90%] lg:w-[66%] mx-auto mb-8 border-2 border-white rounded-2xl">
      <div className="lg:grid lg:grid-cols-12 ">
        <div className="lg:col-span-4 p-5">
          <img
            className="h-[300px] w-[500px] mx-auto lg:h-[300px] lg:w-[300px]"
            src={MOVIE_CARD_IMG + watchListMovieDetails.poster_path}
            alt={watchListMovieDetails.title}
          />
        </div>

        <div className="text-white lg:col-span-8 w-[100%] p-3">
          <h1 className="text-[1.1rem] lg:text-[1.5rem] font-bold">
            {watchListMovieDetails.title}
          </h1>
          <div className="ml-[50%] lg:ml-[75%] text-[0.8rem] lg:text-[1rem] text-left uppercase mt-2 lg:mt-5 mb-3 border-2 border-white p-[0.35rem] w-[45%] lg:w-[25%] rounded-2xl">
            <h3>{`LANG - ${watchListMovieDetails.original_language}`}</h3>
            <h3>{`RATINGS - ${watchListMovieDetails.vote_average}`}</h3>
          </div>

          <p className="text-[0.7rem] lg:text-[1rem] text-justify opacity-85">
            {watchListMovieDetails.overview}
          </p>
          <div>
            <button className="mt-2 lg:mt-6 bg-red-600 border-[1px] duration-300 hover:duration-300  border-red-700 py-0.5 px-2 rounded-md text-white hover:bg-transparent hover:border-[1px] hover:border-white lg:py-[5px] lg:px-5">
              Play
            </button>
            <button
              className="mt-2 lg:mt-6 ml-5 bg-teal-500 border-[1px] duration-300 hover:duration-300  border-teal-500 py-0.5 px-2 rounded-md text-white hover:bg-teal-600 hover:border-[1px] hover:border-white lg:py-[5px] lg:px-5"
              onClick={() => handleRemoveList(watchListMovieDetails.id)}
            >
              Remove From List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchListMovie;
