import {useEffect} from "react";
import {MOVIE_API_NOW_PLAYING} from "../utils/Constants";
import {useDispatch, useSelector} from "react-redux";
import {addPopularTvSeriesData} from "../utils/redux/tvSlice";

const usePopularTvSeries = () => {
  const dispatch = useDispatch();
  const storedPopularTvSeries = useSelector((store) => store.tvSeries.popularTvSeriesData);
  //It will fetch data from API and will store in redux
  const getPopularTvSeriesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      MOVIE_API_NOW_PLAYING
    );
    const json = await data.json();
    dispatch(addPopularTvSeriesData(json.results));
  };

  useEffect(() => {
    //MEMOIZATION
    !storedPopularTvSeries && getPopularTvSeriesData();
    // getTvSeriesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePopularTvSeries;
