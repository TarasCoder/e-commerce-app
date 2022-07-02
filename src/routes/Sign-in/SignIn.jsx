import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utils/Firebase";
import SignUpForm from "../../components/sign-up-form/SignUpForm";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign-in</h1>
      <button onClick={logGoogleUser}>Sign in with GooglePopup</button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;
