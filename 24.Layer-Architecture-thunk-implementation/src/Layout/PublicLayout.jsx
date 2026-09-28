import React from "react";
import { Outlet } from "react-router";
import PublicNavbar from "../shared/components/PublicNavbar";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {" "}
      <PublicNavbar />{" "}
      <main>
        {" "}
        <Outlet />{" "}
      </main>{" "}
    </div>
  );
};

export default PublicLayout;
