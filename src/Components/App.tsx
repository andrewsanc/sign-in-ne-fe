import SignIn from "./SignIn";

export interface LogInProps {
  email: string;
  password: string;
}

export default function App() {
  async function logIn({ email, password }: LogInProps) {
    console.log(email, password);
  }

  return (
    <>
      <SignIn logIn={logIn} />
    </>
  );
}
