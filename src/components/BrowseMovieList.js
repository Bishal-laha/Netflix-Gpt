import {nanoid} from "@reduxjs/toolkit";
import {BrowseMovieCard} from "./Index";

const BrowseMovieList = ({headingTitle, movieList}) => {
  return (
    <div>
      <div className="flex flex-col mb-8">
        <hr className="bg-red-800 h-1 rounded-[100%]" />
        <h1 className="text-white text-[1.3rem] font-semibold mb-3 mt-2">
          {headingTitle}
        </h1>
        <hr className="bg-red-800 h-1 rounded-[100%] w-[60%] lg:w-[50%]" />
        <div className="flex overflow-x-scroll p-4 lg:p-8">
          <div className="flex gap-1.5 flex-row">
            {movieList.map((item) => (
              <BrowseMovieCard key={nanoid()} cardData={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseMovieList;
