import {useEffect} from "react";
import {MOVIE_API_NOW_PLAYING} from "../utils/Constants";
import {useDispatch, useSelector} from "react-redux";
import {addTopRatedMovies} from "../utils/redux/movieSlice";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();
  const storedTopRatedMovie = useSelector(
    (store) => store.movie.topRatedMovies
  );
  //It will fetch data from API and will store in redux
  const getTopRatedMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      MOVIE_API_NOW_PLAYING
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    //MEMOIZATION
    if (!storedTopRatedMovie) getTopRatedMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTopRatedMovie;
