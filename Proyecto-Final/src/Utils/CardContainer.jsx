import React, { useState } from 'react';
import classes from '../Styles/CardContainer.module.css'; 
import Card from "../Components/Card";
import Switch from "../Utils/Switch";
import SearchBar from '../Components/SearchBar';
import Text_Subtext from './Text&Subtext';

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

  const transformPlatforms = (parentPlatforms) => {
    return parentPlatforms.map(platformObj => platformObj.platform.name);
  };

  return (
    <div className={classes.DivGral} style={{ backgroundColor: BackgroundColor }}>
      <div className={classes.SearchBar}>
      <SearchBar></SearchBar>
      </div>
      <div className={classes.Switch}>
      <Text_Subtext mode={DarkMode} Text={"New and Trending"} Subtext={"Based on player counts and release date"}></Text_Subtext>
      <Switch color={'green'} onChangeHandler={switchDarkMode} />
      </div>
     
      <div className={classes.Container}>
        {data.map((game, index) => (
          <Card
            key={index}
            photogame={game.background_image}
            namegame={game.name}
            date={game.released}
            genres={game.genres.map(genre => genre.name)} 
            ranking={game.rating}
            platforms={transformPlatforms(game.parent_platforms)}
            mode={DarkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
