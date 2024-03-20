import {useSelector} from "react-redux";
import SignupLang from "../utils/langConstant/SignUp_Lang_Constant";
import {useNavigate} from "react-router-dom";

const Footer = () => {
  const currLangKey = useSelector((store) => store?.gpt?.langActive);
  const navigate = useNavigate();
  return (
    <div>
      <div className="mx-[1.5rem] lg:mx-[8rem] mt-[3rem] mb-10 lg:mb-20">
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
      <h5 className="text-white opacity-80 mb-10 mx-[3rem] lg:mx-[12rem]">
        {SignupLang[currLangKey].footerH5}
        <span className="underline">{SignupLang[currLangKey].footerSpan}</span>
      </h5>
      <div className="grid lg:grid-cols-4 text-white w-[70%] mx-auto opacity-80 mb-12 underline gap-3">
        <h5>{SignupLang[currLangKey].footerGrid1}</h5>
        <h5>{SignupLang[currLangKey].footerGrid2}</h5>
        <h5>{SignupLang[currLangKey].footerGrid3}</h5>
        <h5>{SignupLang[currLangKey].footerGrid4}</h5>
        <h5>{SignupLang[currLangKey].footerGrid5}</h5>
        <h5>{SignupLang[currLangKey].footerGrid6}</h5>
        <h5>{SignupLang[currLangKey].footerGrid7}</h5>
        <h5>{SignupLang[currLangKey].footerGrid8}</h5>
        <h5>{SignupLang[currLangKey].footerGrid9}</h5>
        <h5>{SignupLang[currLangKey].footerGrid10}</h5>
        <h5>{SignupLang[currLangKey].footerGrid11}</h5>
        <h5>{SignupLang[currLangKey].footerGrid12}</h5>
        <h5>{SignupLang[currLangKey].footerGrid13}</h5>
        <h5>{SignupLang[currLangKey].footerGrid14}</h5>
        <h5>{SignupLang[currLangKey].footerGrid15}</h5>
      </div>
      <div className="mx-[3rem] lg:mx-[12rem] mb-20">
        <h5 className="text-white opacity-60">
          {SignupLang[currLangKey].footerLastH5}
        </h5>
      </div>
    </div>
  );
};

export default Footer;
