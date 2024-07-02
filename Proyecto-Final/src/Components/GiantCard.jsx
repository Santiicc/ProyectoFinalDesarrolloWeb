import React, { useState } from "react";
import classes from "../Styles/GiantCard.module.css";
import classes2 from "../Styles/GiantCardDark.module.css"
import Platform from "../Utils/Platform";
import { IconHeart,IconClose,IconComment,IconLike,IconShare } from "../Utils/Icons";
import WishListButton from "../Utils/WishListButton";
import PurchaseButton from "../Utils/ButtonPurchase";
import parse from 'html-react-parser';


const GiantCard = ({ photogame, namegame, date, genres, platforms, description,developer, onClick,mode, website}) => {
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

  const currentClasses = mode.includes('dark') ? classes2 : classes;


  return (
    <div className={currentClasses.DivGral}>
  

        <div className={classes.DivImg} style={{  backgroundImage:mode.includes("dark")? `linear-gradient(180deg, rgba(48, 48, 48, 0.00) 0%, #303030 84.4%), url(${photogame})`:
        `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F0F0F0 63.23%, #F0F0F0 75.85%), url(${photogame})`

      
        } }>
          
          <button className={classes.IconClose} onClick={onClick}>
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
          
          <div className={currentClasses.Description}>
            {truncarDescription(description, 315)} 
          </div>

          <div className={classes.DivButtons}>
            <WishListButton></WishListButton>
            <PurchaseButton></PurchaseButton>
          </div>

          <div className={classes.DivDGRP}>

            <div className={classes.DivMidLeft}>
              <div className={classes.TextSubtext}>
                <h6 className={currentClasses.Info}>Platforms</h6>
                <h6 className={currentClasses.Info2}>{platforms.join(", ")}</h6>
              </div>

              <div className={classes.TextSubtext}>
                <h6 className={currentClasses.Info}>Release Date</h6>
                <h6 className={currentClasses.Info2}>{date}</h6>
              </div>
            </div>

            <div className={classes.DivMidLeft}>
              <div className={classes.TextSubtext}>
                <h6 className={currentClasses.Info}>Genre</h6>
                <h6 className={currentClasses.Info2}>{genres.join(", ")}</h6>
              </div>

              <div className={classes.TextSubtext}>
                <h6 className={currentClasses.Info}>Developer</h6>
                <h6 className={currentClasses.Info2}>{developer}</h6>
              </div>
            </div>


          </div>


        </div>

        <div className={classes.DivPA}>
              <div className={classes.TextSubtext}>
                <h6 className={currentClasses.Info}>Publisher</h6>
                <h6 className={currentClasses.Info2}>{'PublisherTest'}</h6>
              </div>

              <div className={classes.TextSubtext}>
                <h6 className={currentClasses.Info}>Age Rating</h6>
                <h6 className={currentClasses.Info2}>{'Not Rated'}</h6>
              </div>
        </div>

        <div className={classes.LastDiv}>
            <div className={classes.TextSubtext}>
                <h6 className={currentClasses.Info}>Website</h6>
                <h6 className={currentClasses.Info2}>{website}</h6>
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
