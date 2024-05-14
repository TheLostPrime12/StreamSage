import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full px-4 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={require("../img/streamsage.png")} alt="logo" />
      {user && (
        <div className="flex">
          <img
            src={user?.photoURL}
            alt="userIcon"
            className="w-8 h-8 rounded-md"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
