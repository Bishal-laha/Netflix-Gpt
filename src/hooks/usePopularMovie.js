import {useEffect} from "react";
import {MOVIE_API_NOW_PLAYING} from "../utils/Constants";
import {useDispatch, useSelector} from "react-redux";
import {addPopularMovies} from "../utils/redux/movieSlice";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const storedPopularMovie = useSelector((store) => store.movie.popularMovies);
  //It will fetch data from API and will store in redux
  const getPopularMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      MOVIE_API_NOW_PLAYING
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    //MEMOIZATION
    if (!storedPopularMovie) getPopularMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePopularMovie;
