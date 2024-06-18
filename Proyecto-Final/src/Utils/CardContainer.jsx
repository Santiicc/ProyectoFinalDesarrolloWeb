import React, { useState } from 'react';
import classes from '../Styles/CardContainer.module.css'; 
import Card from "../Components/Card";
import Switch from "../Utils/Switch";

const CardContainer = ({ data }) => {
  const [DarkMode, setDarkMode] = useState('light');
  const [BackgroundColor, setBackgroundColor] = useState('#F0F0F0');

  const switchDarkMode = () => {
    if (DarkMode === 'dark') {
      setDarkMode('light');
      setBackgroundColor('#F0F0F0');
    } else {
      setDarkMode('dark');
      setBackgroundColor('#151515');
    }
  };

  return (
    <div className={classes.DivGral} style={{ backgroundColor: BackgroundColor }}>
      <Switch color={'green'} onChangeHandler={switchDarkMode} />
      <div className={classes.Container}>
        {data.map((game, index) => (
          <Card
            key={index}
            photogame={game.photogame}
            namegame={game.namegame}
            date={game.date}
            genres={game.genres}
            ranking={game.ranking}
            platforms={game.platforms}
            mode={DarkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
