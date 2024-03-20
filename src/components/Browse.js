import {useSelector} from "react-redux";
import {BrowseMainContainer,BrowseSecondContainer,BrowseHeader,GPTMain} from "./Index";
import {useNowPlayingMovie,usePopularMovie,useTopRatedMovie,useUpcomingMovie,useAirTodayTvSeries,usePeople,useOnTheAirTvSeries,usePopularTvSeries,useTopRatedTvSeries} from "../hooks/Index";

const Browse = () => {
  const toggleGptPage = useSelector((store) => store?.gpt?.toggleGptPage);
  //USING CUSTOM HOOKS
  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();
  useAirTodayTvSeries();
  useOnTheAirTvSeries();
  usePopularTvSeries();
  useTopRatedTvSeries();
  usePeople();

  return (
    <div>
      <BrowseHeader />
      {/* //This is used to go GPT-SEARCH PAGE */}
      {toggleGptPage ? (
        <GPTMain />
      ) : (
        <>
          <BrowseMainContainer />
          <BrowseSecondContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
