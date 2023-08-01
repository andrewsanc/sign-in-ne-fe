import React, { useState } from "react";
import "./SignIn.css";
import { LogInProps } from "./App";

interface SignInProps {
  logIn: (LoginInfo: LogInProps) => Promise<void>;
}

export default function SignIn(props: SignInProps) {
  const { logIn } = props;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);

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
    <form className='form' onSubmit={handleOnFormSubmit}>
      <input
        className='input'
        id='email'
        value={email}
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className='input'
        id='password'
        value={password}
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      {showError && <div className='error'>Please fill out fields</div>}
      <button className='sign-in-btn' type='submit'>
        Sign In
      </button>
      <button className='clear-btn' type='button' onClick={clearForm}>
        Clear
      </button>
    </form>
  );
}
