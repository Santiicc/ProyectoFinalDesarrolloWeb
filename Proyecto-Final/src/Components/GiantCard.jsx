import React, { useState } from "react";
import classes from "../Styles/BigCard.module.css";
import Platform from "../Utils/Platform";
import { IconHeart } from "../Utils/Icons";
import WishListButton from "../Utils/WishListButton";
import PurchaseButton from "../Utils/ButtonPurchase";

const BigCard = ({ photogame, namegame, date, genres, ranking, platforms, description }) => {
  const [liked, setLiked] = useState(false);

  const truncarDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  const HeartClick = () => {
    setLiked(!liked); 
  };

  return (
    <div className={classes.CardDiv}>
      <div className={classes.DivImg} style={{ backgroundImage: `url(${photogame})` }}>
        <button className={`${classes.HeartButton} ${liked ? classes.Liked : ''}`} onClick={HeartClick}>
          <IconHeart fill={liked ? 'white' : 'none'} />
        </button>
      </div>

      <div className={classes.Platforms}>
              {platforms.map((p, index) => (
                <Platform key={index} platform={p} />
              ))}
      </div>

      <div>
              <h2>{namegame}</h2>
      </div>

      <div className={classes.DivDescription}>
          {truncarDescription(description, 315)} 
      </div>

      <div>
        <WishListButton></WishListButton>
        <PurchaseButton></PurchaseButton>
      </div>


    </div>

  );
};

export default BigCard;
