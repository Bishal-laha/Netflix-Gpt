import {useDispatch} from "react-redux";
import {MOVIE_CARD_IMG} from "../utils/Constants";
import {addMovieDetails} from "../utils/redux/watchListSlice";

const BrowseMovieCard = ({cardData}) => {
  // console.log(cardData);
  const dispatch = useDispatch();
  const restImg =
    cardData.media_type === "person"
      ? cardData.profile_path
      : cardData.poster_path;
  if (!restImg) return null;

  const addToCart = () => {
    // console.log(cardData)
    dispatch(addMovieDetails(cardData));
  };

  return (
    <div className="w-28 lg:w-36 text-white ml-[0.4rem] duration-200 hover:transform hover:scale-110 hover:duration-300">
      <div className="relative">
        <img
          src={MOVIE_CARD_IMG + restImg}
          alt={
            cardData.media_type === "person" ? cardData.name : cardData.title
          }
        />
        {cardData.media_type === "person" ? (
          <div></div>
        ) : (
          <div
            className="absolute top-0 right-0 bg-red-600 text-white text-center text-[1.2rem] font-bold h-8 w-8 opacity-96 rounded-l-xl"
            onClick={addToCart}
          >
            +
          </div>
        )}
      </div>
      <label className="text-[0.8rem] lg:text-[0.9rem] opacity-70">
        {cardData.media_type === "person" || cardData.media_type === "tv"
          ? cardData.name
          : cardData.title}
      </label>
    </div>
  );
};

export default BrowseMovieCard;
