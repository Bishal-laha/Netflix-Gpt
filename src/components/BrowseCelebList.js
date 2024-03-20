import {BrowseMovieCard} from "./Index";

const BrowseCelebList = ({headingTitle, celebList}) => {
  return (
    <div>
      <div className="flex flex-col mb-8">
        <hr className="bg-red-800 h-1 rounded-[100%]" />
        <h1 className="text-white text-[1.3rem] font-semibold mb-3">
          {headingTitle}
        </h1>
        <hr className="bg-red-800 h-1 rounded-[100%] w-[60%] lg:w-[50%]" />
        <div className="flex overflow-x-scroll p-2 lg:p-8">
          <div className="flex gap-3 flex-row">
            {celebList.map((item) => (
              <BrowseMovieCard key={item.id} cardData={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCelebList;
