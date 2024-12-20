import React from 'react'
import './Header.css'
import logo from '../../assets/netflix_logo.png'
function Header() {
  return (
    <div className="header_outer">
      <div className='header_inner'>
        <div className="leftside_nav">
          <ul>
            <li>
              <img src={logo} alt="" />
            </li>
            <li>
              <a href="#">Netflix</a>
            </li>
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
              <a href="#">search</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header
