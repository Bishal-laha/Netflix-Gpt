import {useEffect} from "react";
import {MOVIE_API_NOW_PLAYING} from "../utils/Constants";
import {useDispatch, useSelector} from "react-redux";
import {addNowPlayingMovies} from "../utils/redux/movieSlice";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  const storedNowPlayingMovie = useSelector(
    (store) => store.movie.nowPlayingMovies
  );
  let i = 1;
  let allData = [];

  //It will fetch data from API and will store in redux
  const getNowPlayingMovieData = async () => {
    while (i <= 3) {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${i}`,
        MOVIE_API_NOW_PLAYING
      );
      const json = await data.json();
      allData.push(...json.results);
      i++;
    }
    dispatch(addNowPlayingMovies(allData));
  };

  useEffect(() => {
    //MEMOIZATION
    if (!storedNowPlayingMovie) getNowPlayingMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useNowPlayingMovie;
