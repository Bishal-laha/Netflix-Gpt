import {useEffect} from "react";
import {MOVIE_API_NOW_PLAYING} from "../utils/Constants";
import {useDispatch, useSelector} from "react-redux";
import {addAirTodayTvSeriesData} from "../utils/redux/tvSlice";

const useAirTodayTvSeries = () => {
  const dispatch = useDispatch();
  const storedAirTodayTvSeries = useSelector((store) => store.tvSeries.airTodayTvSeriesData);
  //It will fetch data from API and will store in redux
  const getAirTodayTvSeriesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      MOVIE_API_NOW_PLAYING
    );
    const json = await data.json();
    dispatch(addAirTodayTvSeriesData(json.results));
  };

  useEffect(() => {
    //MEMOIZATION
    !storedAirTodayTvSeries && getAirTodayTvSeriesData();
    // getTvSeriesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useAirTodayTvSeries;
