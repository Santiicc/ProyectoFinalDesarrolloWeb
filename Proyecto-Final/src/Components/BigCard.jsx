import React from "react";
import classes from "../Styles/Card.module.css"
import Platform from "../Utils/Platform";
import classes2 from "../Styles/Icons.module.css"


const BigCard = ({photogame,namegame , date , genres , ranking , platforms }) => {
  return (
    <div className={classes.CardDiv}>

    <img src={photogame} className={classes.Img}/>
      
      <div className={classes.CardDiv2}>

        <div className="PrimerDiv">
          <div className="NameGame">
            <h2 className={classes.TitleGame}>{namegame}</h2>
          </div>
          <div className="Ranking">
            <span>{ranking}</span>
          </div>
        </div>

        <div className="DivPlatforms">
          <div className="ReleaseDate">
            <h6 className={classes.Info}>Release Date :</h6>
          </div>
          <div className="ReleaseDate2">
            <h6>{date}</h6>
          </div>
          <div className="Platforms">
              {platforms.map((p) => {
              return (
                <Platform platform={p}></Platform>
              );
            })}
          </div>
        </div>

        <div className="Genres">
          <div className="GenresSubt">
            <h6 className={classes.Info}>Genres :</h6>
          </div>
            
          <div className="GenresWhite">
            <h6>{genres}</h6>
          </div>
        </div>
        
      </div>

    </div>
  );
};

export default BigCard;
