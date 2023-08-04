import { useState } from "react";
import "./Dashboard.css";

interface DashboardProps {
  userSignIn: boolean;
}

interface Data {
  msg: string;
  secret: string;
}

export default function Dashboard(props: DashboardProps) {
  const { userSignIn } = props;
  const [data, setData] = useState<Data | null>(() => {
    return userSignIn ? { msg: "", secret: "" } : null;
  });

  async function getData() {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/api/v1/dashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    setData(result);
  }

  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <h4>Token is present</h4>
      {data && (
        <>
          <div>{data.msg}</div>
          <div>{data.secret}</div>
        </>
      )}
      <button className='get-data-btn' onClick={getData}>
        Get Data
      </button>
    </div>
  );
}
