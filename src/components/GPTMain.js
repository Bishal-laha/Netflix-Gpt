import {GPTSearchBar,GPTSearchResult} from "./Index";

const GPTMain = () => {
  return (
    <div className="relative bg-signup-img overflow-hidden min-h-[100vh]">
      <GPTSearchBar />
      <GPTSearchResult />
    </div>
  );
};

export default GPTMain;
