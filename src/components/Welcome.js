import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import forum from "../img/forum.jpg"
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className="welcome">
      <img src={forum} alt="Forum logo" />
      <p className="text-2xl font-bold text-black font-mono">SIGN IN WITH GOOGLE TO CHAT</p>
    </main>
  );
};

export default Welcome;
