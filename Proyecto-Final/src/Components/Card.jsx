import React, { useState } from "react";
import classes from '../Styles/Card.module.css';
import classes2 from '../Styles/CardWhite.module.css';
import Platform from "../Utils/Platform";
import { IconHeart } from "../Utils/Icons";

const Card = ({ mode, photogame, namegame, date, genres, ranking, platforms }) => {
  const [liked, setLiked] = useState(false);

  const HeartClick = () => {
    setLiked(!liked);
  };

  const currentClasses = mode.includes('dark') ? classes : classes2;

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const genreText = genres.join(", ");
  const truncatedGenreText = truncateText(genreText, 30);

  return (
    <div className={currentClasses.CardDiv}>
      <div className={classes.DivImg} style={{ backgroundImage: `url(${photogame})` }}>
        <button className={classes.HeartButton} onClick={HeartClick}>
          <IconHeart fill={liked ? 'white' : 'none'} />
        </button>
      </div>
      
      <div className={classes.CardDiv2}>
        <div className={classes.PrimerDiv}>
          <h2 className={currentClasses.Namegame}>{truncateText(namegame, 20)}</h2>
          <span className={classes.Ranking}>{ranking}</span>
        </div>

        <div className={classes.DivPyG}>
          <div className={classes.RyG}>
            <h6 className={classes.Info}>Release Date:</h6>
            <h6 className={classes.Info}>Genres:</h6>
          </div>
            
          <div className={classes.GyP}>
            <div className={classes.GyPintern}>
              <h6 className={currentClasses.Info2}>{date}</h6>
              <div className={classes.Platforms}>
                {platforms.map((p, index) => (
                  <Platform key={index} platform={p} mode={mode} />
                ))}
              </div>
            </div>
            
            <h6 className={currentClasses.Info2}>
              {truncatedGenreText}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
