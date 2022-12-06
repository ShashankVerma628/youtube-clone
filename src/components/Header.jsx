import React from "react";
import { Link } from "react-router-dom";

import { FaYoutube } from "react-icons/fa";
// components
import { Search, UserProfile } from "./";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo-container">
          <Link className="logo-link" to="/">
            <FaYoutube  color="red" size={50} /> Youtube
          </Link>
        </div>
        <Search />
        <UserProfile />
      </header>
    </>
  );
};

export default Header;
