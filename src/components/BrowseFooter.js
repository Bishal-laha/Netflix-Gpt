import SignupLang from "../utils/langConstant/SignUp_Lang_Constant";

const BrowseFooter = () => {
  return (
    <div className="mt-[4%]">
      <div className="grid lg:grid-cols-4 text-white w-[70%] mx-auto opacity-80 mb-12 underline gap-3">
        <h5>{SignupLang["English"].footerGrid1}</h5>
        <h5>{SignupLang["English"].footerGrid2}</h5>
        <h5>{SignupLang["English"].footerGrid3}</h5>
        <h5>{SignupLang["English"].footerGrid4}</h5>
        <h5>{SignupLang["English"].footerGrid5}</h5>
        <h5>{SignupLang["English"].footerGrid6}</h5>
        <h5>{SignupLang["English"].footerGrid7}</h5>
        <h5>{SignupLang["English"].footerGrid8}</h5>
        <h5>{SignupLang["English"].footerGrid9}</h5>
        <h5>{SignupLang["English"].footerGrid10}</h5>
        <h5>{SignupLang["English"].footerGrid11}</h5>
        <h5>{SignupLang["English"].footerGrid12}</h5>
        <h5>{SignupLang["English"].footerGrid13}</h5>
        <h5>{SignupLang["English"].footerGrid14}</h5>
        <h5>{SignupLang["English"].footerGrid15}</h5>
      </div>
      <div className="mx-[3rem] lg:mx-[12rem] mb-20">
        <h5 className="text-white opacity-60">
          {SignupLang["English"].footerLastH5}
        </h5>
      </div>
    </div>
  );
};

export default BrowseFooter;
