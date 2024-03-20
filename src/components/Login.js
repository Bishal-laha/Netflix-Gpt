import {SignInValidate} from "../utils/validation/SignInValidate";
import {signUpValidate} from "../utils/validation/signUpValidate";
import {useState, useRef} from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utils/Firebase";
import {useDispatch} from "react-redux";
import {addUser} from "../utils/redux/userSlice";
import {SignInHeader} from "./Index";
import {CDN_BG_IMG} from "../utils/Constants";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const [errorMessageFromValidation, setErrorMessageFromValidation] =
    useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef();
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleLoginState = () => {
    setIsLogIn(!isLogIn);
  };

  const handleSignIn = () => {
    const message = SignInValidate(email.current.value, password.current.value); //It will validate and if successful will return null else return errorString
    setErrorMessageFromValidation(message);
    if (message) {
      formRef.current.reset(); //It will erase all values
      return; // Incase of error message it won't go for authentication
    }
    //SIGN IN - SIGN UP AUTHENTICATION LOGIC USING FIREBASE
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        // eslint-disable-next-line
        const user = userCredential.user;
        formRef.current.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessageFromValidation(errorCode + ": " + errorMessage);
      });
  };

  const handleSignUp = () => {
    //Validation Checking
    const message = signUpValidate(
      fullName.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessageFromValidation(message); //Set Error Message
    if (message) {
      formRef.current.reset();
      return; // Incase of error message it won't go for authentication
    }
    //Authentication Code
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fullName.current.value,
        })
          .then(() => {
            // Profile updated!
            //this dispatcher is done due to late update of displayname bug
            const {uid, email, displayName} = auth.currentUser;
            dispatch(addUser({uid, email, displayName}));
            formRef.current.reset();
          })
          .catch((error) => {
            // An error occurred
            setErrorMessageFromValidation(error.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessageFromValidation(errorCode + ": " + errorMessage);
      });
  };

  return (
    <div className="bg-black absolute h-[100vh] overflow-auto lg:bg-none">
      <SignInHeader />
      <div className="relative opacity-0 lg:opacity-100">
        <img src={CDN_BG_IMG} alt="" />
      </div>
      <form
        ref={formRef}
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
        //CSS FOR SIGN UP & SIGN IN BOXES
        className={
          isLogIn
            ? "absolute bg-[#000000cc] w-11/12 pl-3 mt-10 top-0 left-0 transform translate-y-[12%] lg:w-4/12 lg:p-12 lg:mt-0 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[40%]"
            : "absolute bg-[#000000cc] w-11/12 pl-3 mt-6 top-0 left-0 transform translate-y-[12%] lg:w-4/12 lg:p-12 lg:mt-0 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[20%]"
        }
      >
        <div
          className="absolute -top-7 left-4 lg:top-0 lg:left-2 text-[2.2rem] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <h1>⬅️</h1>
        </div>
        <header>
          <h1 className="text-white ml-2 text-[2rem] font-bold mb-2 mt-10 lg:mt-0">
            {isLogIn ? `Sign In` : `Sign Up`}
          </h1>
        </header>
        {/* //ALL INPUT BOXES WITH LABELS */}
        <div>
          {!isLogIn && (
            <div className="relative flex flex-col focus-within:border-blue-500 mb-2">
              <input
                ref={fullName}
                name="name"
                type="text"
                placeholder=""
                className="relative p-4 m-2 bg-transparent text-white lg:text-black outline outline-1 outline-slate-600 w-[100%] lg:w-[95%] lg:p-3 lg:bg-white lg:outline-none rounded-sm focus:outline focus:outline-offset-2 focus:outline-blue-200 "
              />
              <label
                htmlFor="name"
                className="absolute text-white lg:text-black top-[30%]  left-5 origin-0 duration-300 opacity-60 "
              >
                Full name
              </label>
            </div>
          )}
          <div className="relative flex flex-col focus-within:border-blue-500 mb-2">
            <input
              ref={email}
              name="email"
              type="text"
              placeholder=""
              className="relative p-4 m-2 bg-transparent text-white lg:text-black outline outline-1 outline-slate-600 w-[100%] lg:w-[95%] lg:p-3 lg:bg-white lg:outline-none rounded-sm focus:outline focus:outline-offset-2 focus:outline-blue-200 "
            />
            <label
              htmlFor="email"
              className="absolute text-white lg:text-black top-[30%]  left-5 origin-0 duration-300 opacity-60 "
            >
              Email or phone number
            </label>
          </div>
          <div className="relative flex flex-col focus-within:border-blue-500 mb-2">
            <input
              ref={password}
              name="password"
              type="password"
              placeholder=""
              className="relative p-4 m-2 bg-transparent outline outline-1 text-white lg:text-black outline-slate-600 w-[100%] lg:w-[95%] lg:p-3 lg:bg-white lg:outline-none rounded-sm focus:outline focus:outline-offset-2 focus:outline-blue-200"
            />
            <label
              htmlFor="password"
              className="absolute text-white lg:text-black top-[30%]  left-5 origin-0 duration-300 opacity-60 "
            >
              Password
            </label>
          </div>
          {/* //ERROR MESSAGE */}
          <div className="mx-2">
            <h3 className="text-red-600 text-[1rem]">
              {errorMessageFromValidation}
            </h3>
          </div>
          <button
            type="submit"
            className="w-[100%] lg:w-[95%] text-white bg-red-600 p-2 m-2 rounded-sm hover:bg-red-500"
            onClick={isLogIn ? handleSignIn : handleSignUp}
          >
            {isLogIn ? `Sign In` : `Sign Up`}
          </button>
        </div>
        {/* //LINK TO SIGN IN AND SIGN UP */}
        <div className="flex flex-row gap-1 cursor-pointer mx-2 mt-2 mb-20 lg:mb-0">
          <h3 className="text-white text-center">
            {isLogIn ? `New to Netflix?` : `Welcome to Netflix!`}
          </h3>
          <span className="text-white underline" onClick={handleLoginState}>
            {isLogIn ? `Sign up now!` : `Sign In`}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
