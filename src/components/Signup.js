import {Link, useNavigate} from "react-router-dom";
import {SignupCarousal,Footer} from "./Index";
import {SignupAccordionData} from "../utils/SignupAccordionData";
import {CDN_LOGO} from "../utils/Constants";
import SignupLang from "../utils/langConstant/SignUp_Lang_Constant";
import {useDispatch, useSelector} from "react-redux";
import {toggleLangActive} from "../utils/redux/gptSlice";
import {SUPPORTED_LANG} from "../utils/Constants";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currLangKey = useSelector((store) => store?.gpt?.langActive);
  //THIS IS FOR CHANGING LANGS IN GPT-SEARCH PAGE
  const handleLangChange = (e) => {
    dispatch(toggleLangActive(e.target.value));
  };
  return (
    <div>
      {/* //NAV & PRE BORDER AREA */}
      <div className="relative bg-signup-img bg-cover overflow-hidden min-h-[100vh]">
        {/* NAV LOGO AND BUTTON */}
        <div className="flex flex-row justify-between">
          <div className="px-4 py-3 lg:px-8 lg:py-2 ">
            <img src={CDN_LOGO} alt="Logo" className="w-28 lg:w-48 " />
          </div>
          <div className="mr-2 my-5 lg:mx-12 lg:my-6">
            <select className="py-1 px-2 mr-3  rounded-md border border-1 delay-200 outline outline-1 outline-white  border-white bg-transparent text-white text-center lg:py-1 lg:px-5 lg:mr-5">
              {SUPPORTED_LANG.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.name}
                  className="bg-transparent text-black duration-300 "
                  onClick={handleLangChange}
                >
                  {lang.identifier}
                </option>
              ))}
            </select>
            <Link to="/login-signup">
              <button className="  bg-red-600 border-[1px]  border-red-700 py-1 px-2 rounded-md text-white hover:bg-transparent hover:border-[1px] hover:border-white lg:py-[5px] lg:px-5">
                {SignupLang[currLangKey].signIn}
              </button>
            </Link>
          </div>
        </div>
        {/* SECTION ONE */}
        <div className="mx-[1.5rem] w-[85%] my-[3rem] lg:w-[100%] lg:mx-[9.2rem]">
          <h1 className="text-white text-[2rem] mb-3 font-bold lg:text-[3.6rem] ">
            {SignupLang[currLangKey].s1h1p1}
            <br />
            {SignupLang[currLangKey].s1h1p2}
          </h1>
          <h3 className="text-white text-[1.1rem] mb-5 lg:mb-10 lg:font-semibold lg:text-[1.3rem]">
            {SignupLang[currLangKey].s1h3}
          </h3>
          <h5 className="text-white opacity-60 mb-4">
            {SignupLang[currLangKey].s1h5}
          </h5>
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-2">
            <input
              type="text"
              placeholder={SignupLang[currLangKey].s1InPlaceholder1}
              className="block p-[0.8rem] w-[100%] rounded-md  bg-transparent outline outline-1 outline-slate-600 text-white lg:w-[39%] lg:rounded-sm lg:p-[1rem]"
            />
            <button
              type="submit"
              className="text-white font-semibold bg-red-600 p-[0.5rem] text-[1.2rem] w-[60%] rounded-md hover:bg-red-700 hover:opacity-97 lg:w-[20%] lg:text-[1.5rem]"
              onClick={() => navigate("/login-signup")}
            >
              {SignupLang[currLangKey].s1Button1}
            </button>
          </div>
        </div>
      </div>
      {/* //AFTER BORDER AREA */}
      <div className=" section_2 min-h-[100vh] w-[100%] overflow-hidden bg-black absolute top-[98%] before:content-['k'] before:border-t-8 before:bg-transparent before:h-0 before:border-t-red-600 before:block before:rounded-[100%]">
        {/* //PRE CARD SECTION */}
        <div className="text-white w-[85%] p-5 mt-[4rem] mx-auto rounded-[15px] lg:w-[80%] lg:p-9 lg:mt-[6rem] bg-gradient-to-r from-pink-900 to-pink-950 opacity-80 duration-300 delay-50 hover:scale-105">
          <h1 className="font-bold text-[1.5rem] lg:text-[2.2rem]">
            {SignupLang[currLangKey].preCardH1}
          </h1>
          <h3 className="font-medium text-[1.1rem] lg:text-[1.3rem] ">
            {SignupLang[currLangKey].preCardH3}
          </h3>
        </div>
        {/* //CARD SECTION */}
        <div className="w-[100%] my-12">
          <h2 className="text-white font-semibold text-[1.2rem] ml-[1.5rem] lg:text-[1.5rem] mb-3 lg:ml-[8rem]">
            {SignupLang[currLangKey].cardH2}
          </h2>
          <div className="flex flex-col flex-wrap gap-2 justify-center ml-[1.5rem] lg:flex-row lg:gap-5 lg:ml-0">
            <div className="bg-gradient-to-br from-[#1A2043] to-[#1F1220] w-[90%] lg:w-[19%] p-5 text-white rounded-[12px]">
              <h3 className="font-bold text-[1.3rem] lg:text-[1.5rem] mb-2 lg:mb-10">
                {SignupLang[currLangKey].card1h3}
              </h3>
              <p className="text-left opacity-60 pb-10">
                {SignupLang[currLangKey].card1p}
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1A2043] to-[#1F1220] w-[90%] lg:w-[19%] p-5 text-white rounded-[12px]">
              <h3 className="font-bold text-[1.3rem] lg:text-[1.5rem] mb-2 lg:mb-10">
                {SignupLang[currLangKey].card2h3}
              </h3>
              <p className="text-left opacity-60 pb-10">
                {SignupLang[currLangKey].card2p}
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1A2043] to-[#1F1220] w-[90%] lg:w-[19%] p-5 text-white rounded-[12px]">
              <h3 className="font-bold text-[1.3rem] lg:text-[1.5rem] mb-2 lg:mb-10">
                {SignupLang[currLangKey].card3h3}
              </h3>
              <p className="text-left opacity-60 pb-10">
                {SignupLang[currLangKey].card3p}
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1A2043] to-[#1F1220] w-[90%] lg:w-[19%] p-5 text-white rounded-[12px]">
              <h3 className="font-bold text-[1.3rem] lg:text-[1.5rem] mb-2 lg:mb-10">
                {SignupLang[currLangKey].card4h3}
              </h3>
              <p className="text-left opacity-60 pb-10">
                {SignupLang[currLangKey].card4p}
              </p>
            </div>
          </div>
        </div>
        {/* //CAROUSAL PART */}
        <div className="w-[85%] mx-[1.5rem] relative lg:mx-[8rem] lg:w-[65%] lg:mt-20">
          <h2 className="text-white text-[1.2rem] font-bold mb-3 lg:text-[1.5rem]">
            {SignupLang[currLangKey].carouH2}
          </h2>
          {SignupAccordionData.map((item, id) => (
            <SignupCarousal item={item} key={id} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Signup;
