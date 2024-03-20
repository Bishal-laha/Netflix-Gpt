import {CDN_LOGO, SUPPORTED_LANG} from "../utils/Constants";
import {signOut} from "firebase/auth";
import {auth} from "../utils/Firebase";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearGptSearchMoviesDetails,toggleChangeGptPage,toggleLangActive} from "../utils/redux/gptSlice";

const BrowseHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleGptPage = useSelector((store) => store?.gpt?.toggleGptPage);
  const cartMovieDetails = useSelector(
    (store) => store?.watchList?.movieDetails
  );

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        navigate("/login-signup");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  //THIS IS FOR CHANGING STATES TO GO GPT-SEARCH PAGE
  const toggleChange = () => {
    //while toggling it's duty to clear search result from gpt page
    if (toggleGptPage) dispatch(clearGptSearchMoviesDetails());
    dispatch(toggleChangeGptPage());
  };
  //THIS IS FOR CHANGING LANGS IN GPT-SEARCH PAGE
  const handleLangChange = (e) => {
    dispatch(toggleLangActive(e.target.value));
  };

  return (
    <div>
      {/* //LOGO CODE */}
      <div className="px-3 py-2 absolute w-[100%] bg-gradient-to-b from-black to-black z-10 flex flex-row lg:px-8 lg:justify-between">
        {/* //LOGO & LIST-BUTTON ITEMS */}
        <div className="flex flex-col items-start w-[80%] lg:w-[53%] lg:flex-row lg:justify-between lg:items-center">
          <img src={CDN_LOGO} alt="Logo" className="w-28 lg:w-32" />
          <div className="flex flex-col items-start gap-5 text-white list-none cursor-pointer mt-4 ml-3 mb-4 lg:mb-0 lg:ml-7 lg:mt-0 lg:flex-row lg:items-center lg:justify-around">
            <li className="font-semibold">Home</li>
            <li className=" opacity-60 font-semibold active:opacity-100 hover:opacity-100">
              TV Shows
            </li>
            <li className=" opacity-60 font-semibold active:opacity-100 hover:opacity-100">
              Movies
            </li>
            <li className=" opacity-60 font-semibold active:opacity-100 hover:opacity-100">
              New & Popular
            </li>
            <Link to="/browse/watchlist">
              <button className="relative lg:mt-1 lg:ml-4 bg-amber-500 border-[1px] duration-300 border-amber-500 py-1 px-2 rounded-md text-white hover:bg-amber-400 hover:border-[1px] hover:duration-300 hover:border-amber-400 lg:py-[5px] lg:px-5">
                <span className="h-6 w-6 bg-amber-50 text-black absolute rounded-lg text-center -top-3 -right-4 lg:-top-2 lg:-right-3">
                  {cartMovieDetails.length}
                </span>
                WatchList
              </button>
            </Link>
          </div>
        </div>
        {/* //SIGN-OUT & GPT-SEARCH BUTTON */}
        <div>
          <div className="-ml-[25%] mr-3 mt-[55%] flex flex-col gap-2 lg:gap-4 lg:flex-row lg:-mt-1 lg:ml-0 lg:mr-0">
            <button
              className="mt-4 bg-purple-600 border-[1px] duration-300 border-purple-600 py-1 px-2 rounded-md text-white hover:bg-purple-800 hover:border-[1px] hover:duration-300 hover:border-purple-800 lg:py-[6px] lg:px-5"
              onClick={toggleChange}
            >
              {toggleGptPage ? `HOME PAGE` : `GPT SEARCH`}
            </button>
            <button
              onClick={handleSignOut}
              className="mt-4 bg-red-600 border-[1px] duration-300 hover:duration-300 border-red-700 py-1 px-[18%] rounded-md text-white hover:bg-transparent hover:border-[1px] hover:border-white lg:py-[6px] lg:px-5"
            >
              Sign Out
            </button>
            {/* // WHEN GPT-PAGE WILL ENTER LANG OPTION WILL COME */}
            {toggleGptPage && (
              <div>
                <select className="mt-5 px-3 py-1 rounded-md border border-1 delay-200 border-white bg-transparent text-white text-center">
                  {SUPPORTED_LANG.map((lang) => (
                    <option
                      key={lang.identifier}
                      value={lang.name}
                      className="bg-transparent text-black duration-300 "
                      onClick={handleLangChange}
                    >
                      {`${lang.identifier}`}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseHeader;
