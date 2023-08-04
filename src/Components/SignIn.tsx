import React, { useState } from "react";
import "./SignIn.css";
import { LogInProps } from "./App";

interface SignInProps {
  logIn: (LoginInfo: LogInProps) => Promise<void>;
  userSignIn: boolean;
  setUserSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignIn(props: SignInProps) {
  const { logIn, userSignIn, setUserSignIn } = props;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);

  function signOut() {
    localStorage.removeItem("token");
    setUserSignIn(false);
    setEmail("");
    setPassword("");
  }

  function clearForm() {
    setEmail("");
    setPassword("");
    setShowError(false);
  }

  function handleOnFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password) {
      setShowError(true);
      return;
    }

    if (showError && password && email) {
      setShowError(false);
    }

    logIn({ email, password });
  }

  return (
    <form className='form' onSubmit={(e) => handleOnFormSubmit(e)}>
      <input
        className='input'
        id='email'
        value={email}
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)}
        disabled={userSignIn}
      />
      <input
        className='input'
        id='password'
        value={password}
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
        disabled={userSignIn}
      />
      {showError && <div className='error'>Please fill out fields</div>}
      <button
        className='sign-in-btn'
        type={userSignIn ? undefined : "submit"}
        onClick={userSignIn ? () => signOut() : undefined}
      >
        {userSignIn ? "Sign Out" : "Sign In"}
      </button>
      <button className='clear-btn' type='reset' onClick={clearForm}>
        Clear
      </button>
    </form>
  );
}
