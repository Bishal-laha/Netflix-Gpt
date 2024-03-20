import {useSelector} from "react-redux";
import {useTrailerData} from "../hooks/Index";
import {BrowseVideoTitle} from "./Index";

const BrowseMainVideoBackground = ({trailer}) => {
  const trailerVidData = useSelector((store) => store?.movie.trailerData);
  //it is used to get all video data of that specific movie
  useTrailerData(trailer);
  if (!trailerVidData) return;
  //VIDEO DATA AND VIDEO IN BACKGROUND
  return (
    <div>
      <BrowseVideoTitle trailer={trailer} />
      <div>
        <iframe
          className="w-screen aspect-square bg-gradient-to-b from-black to-black absolute top-[30%] lg:aspect-video lg:top-[-18%]"
          src={`https://www.youtube.com/embed/${trailerVidData?.key}?playlist=${trailerVidData.key}&loop=1&autoplay=1&mute=1&controls=0&cc_load_policy=1&disablekb=1&rel=1&fs=0&frameborder=0`}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default BrowseMainVideoBackground;
