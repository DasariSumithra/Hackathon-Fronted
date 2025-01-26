import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/user/info`
        );
        setUserInfo(response.data);
      } catch (error) {
        alert(error.response?.data?.message || "Failed to fetch user info");
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <div className="container">
      <h1>Dashboard</h1>
      {userInfo ? (
        <div>
          <h2>Welcome, {userInfo.name}</h2>
          <p>Email: {userInfo.email}</p>
          <p>Skills: {userInfo.skills.join(", ")}</p>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
};

export default Dashboard;
