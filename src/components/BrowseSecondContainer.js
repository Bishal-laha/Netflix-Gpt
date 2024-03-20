import {useSelector} from "react-redux";
import {BrowseMovieList,BrowseCelebList,BrowseFooter} from "./Index";

const BrowseSecondContainer = () => {
  //ALL STORES DATA IS BEING TAKEN
  const nowPlayingMovieList = useSelector(
    (store) => store?.movie?.nowPlayingMovies
  );
  const popularMovieList = useSelector((store) => store?.movie?.popularMovies);
  const topRatedMovieList = useSelector(
    (store) => store?.movie?.topRatedMovies
  );
  const upcomingMovieList = useSelector(
    (store) => store?.movie?.upcomingMovies
  );
  const airingTodayTvSeriesList = useSelector((store) => store?.tvSeries?.airTodayTvSeriesData);
  const onTheAirTvSeriesList = useSelector((store) => store?.tvSeries?.onTheAirTvSeriesData);
  const popularTvSeriesList = useSelector((store) => store?.tvSeries?.popularTvSeriesData);
  const topRatedTvSeriesList = useSelector((store) => store?.tvSeries?.topRatedTvSeriesData);

  const celebList = useSelector((store) => store?.tvSeries?.celebData);

  if (
    !nowPlayingMovieList ||
    !popularMovieList ||
    !topRatedMovieList ||
    !upcomingMovieList ||
    !airingTodayTvSeriesList ||
    !onTheAirTvSeriesList ||
    !popularTvSeriesList ||
    !topRatedTvSeriesList ||
    !celebList
  )
    return;

  return (
    <div className="z-50 absolute top-[72%] lg:top-[95%] w-[100%] px-2 bg-black cursor-pointer mb-3 lg:px-5 lg:mb-5">
      <BrowseMovieList
        headingTitle="Now Playing Movies"
        movieList={nowPlayingMovieList}
      />

      <BrowseMovieList
        headingTitle="Popular Movies"
        movieList={popularMovieList}
      />

      <BrowseMovieList
        headingTitle="Top Rated Movies"
        celeb={false}
        movieList={topRatedMovieList}
      />

      <BrowseMovieList
        headingTitle="Upcoming Movies"
        movieList={upcomingMovieList}
      />

      <BrowseMovieList headingTitle="Airing Today TV Series" movieList={airingTodayTvSeriesList} />
      <BrowseMovieList headingTitle="On The Air TV Series" movieList={onTheAirTvSeriesList} />
      <BrowseMovieList headingTitle="Popular TV Series" movieList={popularTvSeriesList} />
      <BrowseMovieList headingTitle="Top Rated TV Series" movieList={topRatedTvSeriesList} />

      <BrowseCelebList headingTitle="People Category" celebList={celebList} />
      <hr className="bg-red-800 h-1 rounded-[100%] mt-[7%]" />
      <BrowseFooter />
    </div>
  );
};

export default BrowseSecondContainer;
