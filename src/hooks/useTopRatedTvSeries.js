import {useEffect} from "react";
import {MOVIE_API_NOW_PLAYING} from "../utils/Constants";
import {useDispatch, useSelector} from "react-redux";
import {addTopRatedTvSeriesData} from "../utils/redux/tvSlice";

const useTopRatedTvSeries = () => {
  const dispatch = useDispatch();
  const storedTopRatedTvSeries = useSelector((store) => store.tvSeries.topRatedTvSeriesData);
  //It will fetch data from API and will store in redux
  const getTopRatedTvSeriesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      MOVIE_API_NOW_PLAYING
    );
    const json = await data.json();
    dispatch(addTopRatedTvSeriesData(json.results));
  };

  useEffect(() => {
    //MEMOIZATION
    !storedTopRatedTvSeries && getTopRatedTvSeriesData();
    // getTvSeriesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTopRatedTvSeries;
