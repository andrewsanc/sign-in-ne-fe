import React, { useState } from "react";
import "./SignIn.css";

interface SignInProps {
  logIn: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export default function SignIn(props: SignInProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { logIn } = props;

  function clearForm() {
    setEmail("");
    setPassword("");
  }

  return (
    <form className='form' onSubmit={logIn}>
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
      <button className='sign-in-btn'>Sign In</button>
      <button className='clear-btn' onClick={clearForm}>
        Clear
      </button>
    </form>
  );
}
