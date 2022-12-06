import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

import { useStateContext } from "../context/YoutubeContext";

const UserProfile = () => {
  const { isLoggedIn, userName } = useStateContext();

  return (
    <div className="user-profile-container">
      {!isLoggedIn ? (
        <Link to="/sign-in">
          <div className="login-container">
            <FaUserAlt /> Login
          </div>
        </Link>
      ) : (
        <Link to="/profile">
          <div className="profile">
            <FaUserAlt />
            <p>Hi, {userName?.displayName && <span>{userName?.displayName}</span>}</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default UserProfile;
