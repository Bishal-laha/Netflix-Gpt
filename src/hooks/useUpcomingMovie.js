import {useEffect} from "react";
import {MOVIE_API_NOW_PLAYING} from "../utils/Constants";
import {useDispatch, useSelector} from "react-redux";
import {addUpcomingMovies} from "../utils/redux/movieSlice";

const useUpcomingMovie = () => {
  const dispatch = useDispatch();
  const storedUpcomingMovie = useSelector(
    (store) => store.movie.upcomingMovies
  );
  //It will fetch data from API and will store in redux
  const getUpcomingMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      MOVIE_API_NOW_PLAYING
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    //MEMOIZATION
    if (!storedUpcomingMovie) getUpcomingMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUpcomingMovie;
