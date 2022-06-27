import React from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../Utils/Firebase";

function SignIn() {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign-in</h1>
      <button onClick={logGoogleUser}>Sign in with GooglePopup</button>
    </div>
  );
}

export default SignIn;
