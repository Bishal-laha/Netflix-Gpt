import {useEffect} from "react";
import {MOVIE_API_NOW_PLAYING} from "../utils/Constants";
import {useDispatch, useSelector} from "react-redux";
import {addTrailerData} from "../utils/redux/movieSlice";

const useTrailerData = (trailer) => {
  const dispatch = useDispatch();
  const storedTrailerData = useSelector((store) => store.movie.trailerData);
  //It will fetch trailer data and store in redux(1 way) so that we can use that or store in state(2nd way)
  const getTrailerData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${trailer.id}/videos?language=en-US`,
      MOVIE_API_NOW_PLAYING
    );
    const json = await data.json();
    const filterVid = json?.results.filter((item) => item.type === "Trailer");
    const vid = filterVid.length ? filterVid[0] : json.results[0];
    dispatch(addTrailerData(vid));
  };
  useEffect(() => {
    //MEMOIZATION
    if (!storedTrailerData) getTrailerData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTrailerData;
