import {useSelector} from "react-redux";
import {BrowseMainVideoBackground} from "./Index";

const BrowseMainContainer = () => {
  //This is for randomizing and using that movie trailer
  const movies = useSelector((store) => store?.movie?.nowPlayingMovies);
  // console.log(movies);
  if (!movies) return;
  const trailer = movies[Math.floor(Math.random() * (movies.length / 4))];

  return (
    <div>
      <BrowseMainVideoBackground trailer={trailer} />
    </div>
  );
};

export default BrowseMainContainer;
