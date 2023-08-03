import { useState } from "react";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";

export interface LogInProps {
  email: string;
  password: string;
}

export default function App() {
  const [userSignIn, setUserSignIn] = useState<boolean>(false);

  async function logIn({ email, password }: LogInProps) {
    console.log(email, password);

    const response = await fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const { token } = await response.json();
    setUserSignIn(true);
    localStorage.setItem("token", token);
  }

  return (
    <>
      <SignIn logIn={logIn} />
      {userSignIn && <Dashboard />}
    </>
  );
}
