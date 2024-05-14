import React, { useRef, useState } from "react";
import Header from "./Header";
import { backGroundImageUrl, githubProfileImgUrl } from "../img/imageUrls";
import { checkValidEmailPassword } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = checkValidEmailPassword(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: githubProfileImgUrl,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message)
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + ": " + errorMessage);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={backGroundImageUrl} alt="background-img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-3 p-3 w-full bg-gray-800 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="my-3 p-3 w-full bg-gray-800 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-3 p-3 w-full bg-gray-800 rounded-sm"
        />
        <p className="py-2 text-red-600 font-semibold">{errorMessage}</p>
        <button
          className="my-6 p-2 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="my-4">
          {isSignIn ? (
            <>
              New to StreamSage?{" "}
              <span className="cursor-pointer font-bold" onClick={toggleSignIn}>
                Sign Up
              </span>{" "}
              now.
            </>
          ) : (
            <>
              Already a member?{" "}
              <span className="cursor-pointer font-bold" onClick={toggleSignIn}>
                Sign In
              </span>{" "}
              now.
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
