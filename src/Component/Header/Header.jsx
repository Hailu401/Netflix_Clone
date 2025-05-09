import React from 'react'
import './Head.css'
import logo from '../../assets/images/NetflixLogo.png'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header() {
  return (
    <>
      <div className="header_outer">
        <div className="header_inner">
          <div className="leftside_nav">
            <ul>
              <li>
                <img src={logo} alt="netflix logo" width="100" />
              </li>
              <li><a href="#">Netflix</a></li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">TV Shows</a>
              </li>
              <li>
                <a href="#">Latest Video</a>
              </li>
              <li>
                <a href="#">My List</a>
              </li>
              <li>
                <a href="#">Browser by my language</a>
              </li>
            </ul>
          </div>
          <div className="rightside_nav">
            <ul>
              <li>
                <a href="#">
                  <SearchIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <NotificationsNoneIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <AccountBoxIcon />
                </a>
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header
