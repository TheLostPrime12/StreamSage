import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleShowTvShows } from "../utils/tvShowsSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleTvShowsClick = () => {
    dispatch(toggleShowTvShows());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Clean up / Unmount the unsubscribe
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full px-4 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={require("../img/streamsage.png")} alt="logo" />
      {user && (
        <div className="flex">
          <label className="inline-flex items-center px-2 rounded-md cursor-pointer text-white font-semibold mx-5">
            <input
              type="checkbox"
              className="hidden peer"
              onClick={handleTvShowsClick}
            />
            <span className="px-4 py-[5px] rounded-l-md bg-red-600 peer-checked:bg-red-400 ">
              Movies
            </span>
            <span className="px-4 py-[5px] rounded-r-md bg-red-400 peer-checked:bg-red-700 ">
              TV Shows
            </span>
          </label>
          <div className="flex items-center">
            <img
              src={user?.photoURL}
              alt="userIcon"
              className="w-8 h-8 rounded-md"
            />
            <button onClick={handleSignOut} className="font-bold text-white">
              (Sign Out)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
