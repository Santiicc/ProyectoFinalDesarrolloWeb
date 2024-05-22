import React from "react";
import classes from "../Styles/Card.module.css"


const Card = ({photogame,namegame , date , genres , ranking , platforms }) => {
  return (
    <div className={classes.CardDiv}>
    <div>
      <img src={photogame} className={classes.Img}/>
      <h2 className={classes.TitleGame}>{namegame}</h2>
      <h6 className={classes.Info}>Release Date : {date}</h6>
      <h6 className={classes.Info}>Genres : {genres}</h6>
      {platforms.map((p) => {
        return (
          <p>{p}</p>
        );
      })}
      
    </div>
    </div>
  );
};

export default Card;
