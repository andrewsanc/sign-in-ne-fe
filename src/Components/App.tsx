import SignIn from "./SignIn";

export default function App() {
  async function logIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(e.currentTarget.password.value, e.currentTarget.email.value);
  }

  return (
    <>
      <SignIn logIn={logIn} />
    </>
  );
}
