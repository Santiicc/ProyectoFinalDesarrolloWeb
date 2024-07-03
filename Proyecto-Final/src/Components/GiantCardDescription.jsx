import React, { useState } from "react";
import classes from "../Styles/GiantCardDescription.module.css";
import Platform from "../Utils/Platform";
import { IconCloseBlack } from "../Utils/Icons";

const GiantCardDescription = ({mode,namegame, platforms, description, onClick}) => {


  const truncarDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className={classes.DivGral} style={{backgroundColor:mode.includes("dark")?"#303030":"#F0F0F0"}}>
      <button className={classes.IconClose} onClick={onClick}>
        <IconCloseBlack />
      </button>

      <div className={classes.Platforms}>
        {platforms.map((p, index) => (
          <Platform key={index} platform={p} mode={mode} />
        ))}
      </div>

      <div className={classes.DivNameGame}>
        <h2 className={classes.NameGame}>{namegame}</h2>
      </div>

      <div className={classes.Description} style={{color:mode.includes("light")?"#303030":"#F0F0F0"}}>
        {truncarDescription(description, 2590)}
      </div>
    </div>
  );
};

export default GiantCardDescription;
