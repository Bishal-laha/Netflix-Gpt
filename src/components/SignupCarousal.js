import {useState} from "react";
import {useSelector} from "react-redux";

const SignupCarousal = ({item}) => {
  const [isOpen, setIsOpen] = useState(false);
  const currLangKey = useSelector((store) => store?.gpt?.langActive);
  const handleCarousal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mb-2">
      <div
        className="flex flex-row justify-between flex-wrap bg-[#2D2D2D] text-white p-6 items-center font-medium text-[1.1rem] cursor-pointer lg:text-[1.5rem] lg:p-7"
        onClick={handleCarousal}
      >
        <div className="w-[75%] lg:w-[90%]">
          <h2>
            {currLangKey === "English"
              ? item.enQuestion
              : currLangKey === "Bengali"
              ? item.benQuestion
              : item.hinQuestion}
          </h2>
        </div>
        <h2>{!isOpen ? `MORE` : `LESS`}</h2>
      </div>
      {isOpen && (
        <div>
          <hr />
          <div className="bg-[#2D2D2D] text-white p-7 text-[1.2rem] transition-all duration-1000 delay-500 lg:text-[1.5rem] lg:text-justify">
            <p>
              {currLangKey === "English"
                ? item.enAnswer
                : currLangKey === "Bengali"
                ? item.benAnswer
                : item.hinAnswer}
            </p>
          </div>
          )
        </div>
      )}
    </div>
  );
};

export default SignupCarousal;
