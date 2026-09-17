import React, { useContext, useEffect } from "react";
import { MyStore } from "../context/MyStore";
import { axisoInstance } from "../config/Axios";
import UserCard from "../components/UserCard";

const UserPage = () => {
  const { userData, setUserData } = useContext(MyStore);
  const getUserData = async () => {
    const response = await axisoInstance.get("/users");
    console.log(response.data);
    setUserData(response.data);
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center">
      {userData.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserPage;
