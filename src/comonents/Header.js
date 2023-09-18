import React, { useState } from "react";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import NotificationsActiveSharpIcon from "@mui/icons-material/NotificationsActiveSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Header.css";
export default function Header() {
  const [inputSearch, setInputSearch] = useState(" ");

  return (
    <div className="header">
      
      <div className="header__left">
        <MenuSharpIcon />
        <Link to="/">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
        ></img>
        </Link>
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        ></input>
         <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header__inputButton" />
         </Link>
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon />
        <AppsSharpIcon />
        <NotificationsActiveSharpIcon />
        <AccountCircleSharpIcon alt="Ashish chandara" />
      </div>
    </div>
  );
}
