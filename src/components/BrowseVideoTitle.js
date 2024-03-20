
const BrowseVideoTitle = ({trailer}) => {
  return (
    //ALL TRAILER VIDEO DATA THAT DISPLAYS OVER VIDEO
    <div>
      <div className="text-white absolute z-50 top-[50%] left-[5%] lg:top-[30%]">
        <h2 className="font-bold text-[1rem] mb-2 lg:text-[2rem]">
          {trailer.original_title}
        </h2>
        <p className="text-[0.5rem] mb-4 text-justify opacity-80 w-[80%] lg:text-[0.9rem] lg:w-[35%]">
          {trailer.overview}
        </p>
        <div className="text-[0.6rem] lg:text-[0.9rem]">
          <button className="px-1 py-1 lg:px-6 lg:py-2 bg-white outline outline-1 outline-[#cecece7d] text-black font-semibold rounded-md mr-2 hover:bg-[#9393937d] hover:text-white transition-all duration-300">
            ▶️ Play
          </button>
          <button className="px-1 py-1 lg:px-6 lg:py-2 bg-[#cecece7d] outline outline-1 outline-[#cecece7d] text-white rounded-md hover:bg-[#9393937d] transition-all duration-300">
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseVideoTitle;
