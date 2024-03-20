import {CDN_LOGO} from "../utils/Constants";
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/redux/userSlice";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../utils/Firebase";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const SignInHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        const {uid, email, displayName} = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        navigate("/login-signup");
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="px-3 py-2 lg:absolute lg:px-8 lg:bg-gradient-to-r lg:from-black z-10 lg:flex lg:justify-between lg:w-[100%]">
      <img src={CDN_LOGO} alt="Logo" className="w-28 lg:w-48" />
    </div>
  );
};

export default SignInHeader;
