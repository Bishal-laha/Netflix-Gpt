import {useDispatch, useSelector} from "react-redux";
import {WatchListMovie} from "./Index";
import {useNavigate} from "react-router-dom";
import {clearList} from "../utils/redux/watchListSlice";

const WatchList = () => {
  const storedWatchListMovies = useSelector(
    (store) => store?.watchList?.movieDetails
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="relative bg-signup-img bg-cover overflow-hidden min-h-[100vh] w-[100%]">
      <h1 className="p-3 font-bold text-[1.2rem] lg:text-[2rem] text-center uppercase bg-gradient-to-r to-red-500 from-violet-400 opacity-85">
        WatchList
      </h1>
      <h1
        className="absolute top-2 right-2 lg:top-4 lg:right-6 font-bold bg-black text-[1.1rem] lg:text-[1.5rem] cursor-pointer rounded-full p-1 duration-300 hover:transform hover:scale-110 lg:hover:scale-125 hover:duration-300"
        onClick={() => navigate("/browse")}
      >
        ❌
      </h1>
      {storedWatchListMovies.length === 0 ? (
        <div>
          <h1 className="text-white font-bold text-[1.2rem] text-center mt-[45%]  lg:mt-[13%]">
            Sorry, You have nothing to watch. Please add Movies in your List
          </h1>
          <h1 className="text-[6rem] text-center">😕</h1>
        </div>
      ) : (
        <div>
          <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-80">
            <h1 className="mt-2 p-2 lg:p-0 lg:mt-6 text-white text-[1rem] lg:text-[1.3rem] font-serif opacity-80">
              Wow..You have so many movies in your list to watch
              <span className="text-[1.5rem] lg:text-[2rem]">☺️</span>
            </h1>
            <button
              className="ml-[50%] mr-[12%] py-2 lg:mt-6 lg:ml-0 bg-blue-600 border-[1px] duration-300 hover:duration-300 border-blue-600 rounded-md text-white font-bold hover:bg-blue-700 hover:border-[1px] hover:border-white lg:px-10 lg:py-3"
              onClick={() => {
                dispatch(clearList());
              }}
            >
              Clear List
            </button>
          </div>
          <div className="mt-[10%] lg:mt-[4%] mb-[8%]">
            {storedWatchListMovies.map((item) => (
              <WatchListMovie key={item.id} watchListMovieDetails={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchList;
