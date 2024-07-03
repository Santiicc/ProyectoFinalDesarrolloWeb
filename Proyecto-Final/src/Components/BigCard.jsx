import React, { useState } from "react";
import classes from "../Styles/BigCard.module.css";
import Platform from "../Utils/Platform";
import { IconHeart } from "../Utils/Icons";
import classes2 from '../Styles/BigCardWhite.module.css';

const BigCard = ({ mode, photogame, namegame, date, genres, ranking, platforms, description, onClick }) => {
  const [liked, setLiked] = useState(false);

  const truncarDescription = (text, maxLength) => {
    if (!text || text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  const HeartClick = () => {
    setLiked(!liked); 
  };

  const currentClasses = mode.includes('dark') ? classes : classes2;

  return (
    <div className={currentClasses.CardDiv} onClick={onClick}>
      <div className={classes.DivImg} style={{ backgroundImage: `url(${photogame})` }}>
        <button className={`${classes.HeartButton} ${liked ? classes.Liked : ''}`} onClick={HeartClick}>
          <IconHeart fill={liked ? 'white' : 'none'} />
        </button>
      </div>
      <div className={classes.CardDiv2}>
        <div className={classes.PrimerDiv}>
          <h2 className={currentClasses.Namegame}>{namegame}</h2>
          <span className={classes.Ranking}>{ranking}</span>
        </div>

        <div className={classes.DivPyG}>
          <div className={classes.Rd}>
            <h6 className={classes.Info}>Release Date:</h6>
            <h6 className={classes.Info2}>{date}</h6>
          </div>
          
          <div className={classes.GyP}>
            <h6 className={classes.Info}>Genres:</h6>
            <h6 className={currentClasses.Info2}>
              {genres.join(", ")}
            </h6>
            
            <div className={classes.Platforms}>
              {platforms.map((p, index) => (
                <Platform key={index} platform={p} mode={mode} />
              ))}
            </div>
          </div>
        </div>

        <div className={currentClasses.DivDescription}>
          {description && truncarDescription(description, 180)}
        </div>
      </div>
    </div>
  );
};

export default BigCard;
