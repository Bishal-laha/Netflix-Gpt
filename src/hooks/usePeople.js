import {useEffect} from "react";
import {MOVIE_API_NOW_PLAYING} from "../utils/Constants";
import {useDispatch, useSelector} from "react-redux";
import {addCelebData} from "../utils/redux/tvSlice";

const usePeople = () => {
  const dispatch = useDispatch();
  const storedPeople = useSelector((store) => store.tvSeries.celebData);
  //It will fetch data from API and will store in redux
  const getPeopleData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/person/day?language=en-US",
      MOVIE_API_NOW_PLAYING
    );
    const json = await data.json();
    dispatch(addCelebData(json.results));
  };

  useEffect(() => {
    //MEMOIZATION
    if (!storedPeople) getPeopleData();
    // getPeopleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePeople;
