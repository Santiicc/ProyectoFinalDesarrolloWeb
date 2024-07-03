import React, { useState, useEffect, useRef } from "react";
import classes from '../Styles/searchBar.module.css';
import whiteLogo from '../assets/White.png';
import customProfilePic from '../assets/Custom.png';
import circledPic from '../assets/CircledX.png';
import searchIcon from '../assets/Search.png';

const SearchBar = () => {


  return (
    <div className={classes.header}>
        <div className={classes.logoAndTitle}>
          <img src={whiteLogo} alt="GAMEFINDER Logo" className={classes.logo} />
        </div>
        <div className={classes.SearchD}> <input placeholder="Search Game" type="text" /></div>
     
        <div className={classes.userProfile}>
          <span>Log out</span>
          <img src={customProfilePic} alt="Profile photo" className={classes.profilePic} />
        </div>
  
    </div>
  );
};

export default SearchBar;