import React, { useContext, useEffect, useState } from "react";
import { MyStore } from "../context/MyStore";
import { axisoInstance } from "../config/Axios";
import UserCard from "../components/UserCard";
import Loading from "../components/Loading";

const UserPage = () => {
  const { userData, setUserData } = useContext(MyStore);
  const [isLoading, setISLoading] = useState(true);
  const getUserData = async () => {
    const response = await axisoInstance.get("/users");
    console.log(response.data);
    setUserData(response.data);
    setISLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center">
      {userData.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserPage;
