import {useEffect} from "react";
import {MOVIE_API_NOW_PLAYING} from "../utils/Constants";
import {useDispatch, useSelector} from "react-redux";
import {addOnTheAirTvSeriesData} from "../utils/redux/tvSlice";

const useOnTheAirTvSeries = () => {
  const dispatch = useDispatch();
  const storedOnTheAirTvSeries = useSelector((store) => store.tvSeries.onTheAirTvSeriesData);
  //It will fetch data from API and will store in redux
  const getOnTheAirTvSeriesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      MOVIE_API_NOW_PLAYING
    );
    const json = await data.json();
    dispatch(addOnTheAirTvSeriesData(json.results));
  };

  useEffect(() => {
    //MEMOIZATION
    !storedOnTheAirTvSeries && getOnTheAirTvSeriesData();
    // getTvSeriesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useOnTheAirTvSeries;
