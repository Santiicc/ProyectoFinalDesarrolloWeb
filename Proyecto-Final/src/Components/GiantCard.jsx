import React, { useState } from "react";
import classes from "../Styles/GiantCard.module.css";
import Platform from "../Utils/Platform";
import { IconHeart,IconClose,IconComment,IconLike,IconShare } from "../Utils/Icons";
import WishListButton from "../Utils/WishListButton";
import PurchaseButton from "../Utils/ButtonPurchase";


const GiantCard = ({ photogame, namegame, date, genres, platforms, description,developer }) => {
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
    <div className={classes.DivGral}>
  

        <div className={classes.DivImg} style={{  backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F0F0F0 63.23%, #F0F0F0 75.85%), url(${photogame})`} }>
          
          <button className={classes.IconClose}>
            <IconClose></IconClose>
          </button>
          
          <div className={classes.Platforms}>
                  {platforms.map((p, index) => (
                    <Platform key={index} platform={p} mode={'dark'} />
                  ))}
          </div>

          <div className={classes.DivNameGame}>
                  <h2 className={classes.NameGame}>{namegame}</h2>
          </div>
          
          <div className={classes.Description}>
            {truncarDescription(description, 315)} 
          </div>

          <div className={classes.DivButtons}>
            <WishListButton></WishListButton>
            <PurchaseButton></PurchaseButton>
          </div>

          <div className={classes.DivDGRP}>

            <div className={classes.DivMidLeft}>
              <div className={classes.TextSubtext}>
                <h6 className={classes.Info}>Platforms</h6>
                <h6 className={classes.Info2}>{platforms.join(", ")}</h6>
              </div>

              <div className={classes.TextSubtext}>
                <h6 className={classes.Info}>Release Date</h6>
                <h6 className={classes.Info2}>{date}</h6>
              </div>
            </div>

            <div className={classes.DivMidLeft}>
              <div className={classes.TextSubtext}>
                <h6 className={classes.Info}>Genre</h6>
                <h6 className={classes.Info2}>{genres.join(", ")}</h6>
              </div>

              <div className={classes.TextSubtext}>
                <h6 className={classes.Info}>Developer</h6>
                <h6 className={classes.Info2}>{developer}</h6>
              </div>
            </div>


          </div>


        </div>

        <div className={classes.DivPA}>
              <div className={classes.TextSubtext}>
                <h6 className={classes.Info}>Publisher</h6>
                <h6 className={classes.Info2}>{'Hola'}</h6>
              </div>

              <div className={classes.TextSubtext}>
                <h6 className={classes.Info}>Age Rating</h6>
                <h6 className={classes.Info2}>{'Not Rated'}</h6>
              </div>
        </div>

        <div className={classes.LastDiv}>
            <div className={classes.TextSubtext}>
                <h6 className={classes.Info}>Website</h6>
                <h6 className={classes.Info2}>{'Hola'}</h6>
            </div>

            <div className={classes.Icons}>
              <IconComment></IconComment>
              <IconLike></IconLike>
              <IconShare></IconShare>
            </div>
        </div>

    </div>

  );
};

export default GiantCard;
