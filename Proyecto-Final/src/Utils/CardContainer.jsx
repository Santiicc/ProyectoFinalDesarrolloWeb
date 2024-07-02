import React, { useState } from 'react';
import classes from '../Styles/CardContainer.module.css'; 
import Card from "../Components/Card";
import Switch from "../Utils/Switch";
import Text_Subtext from './Text&Subtext';
import GiantCardDescription from '../Components/GiantCardDescription';
import { getGameById } from '../Api/api';
import GiantCard from '../Components/GiantCard';

const CardContainer = ({ data }) => {
  const [DarkMode, setDarkMode] = useState('light');
  const [BackgroundColor, setBackgroundColor] = useState('#F0F0F0');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

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

  const HandleOpenModal = async (gameId) => {
    const gameData = await getGameById(gameId);
    setSelectedGame(gameData);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedGame(null);
  };

  return (
    <div className={classes.DivGral} style={{ backgroundColor: BackgroundColor }}>
      {isModalVisible && selectedGame && (
        <div className={classes.modalOverlay} style={{ display: 'flex' }}>
          <GiantCard
            photogame={selectedGame.background_image}
            namegame={selectedGame.name} 
            date={selectedGame.released}
            genres={selectedGame.genres.map(genre => genre.name)} 
            platforms={transformPlatforms(selectedGame.parent_platforms)} 
            description={selectedGame.description}
            developer={"DeveloperTest"}
            website={selectedGame.website}
            onClick={handleCloseModal}
            mode={DarkMode}
          />
        </div>
      )}
      <div className={classes.Switch}>
        <Text_Subtext mode={DarkMode} Text={"New and Trending"} Subtext={"Based on player counts and release date"} />
        <Switch color={'green'} onChangeHandler={switchDarkMode} />
      </div>
      <div className={classes.Container}>
        {data.map((game, index) => (
          <Card
            key={index}
            gameId={game.id}
            photogame={game.background_image}
            namegame={game.name}
            date={game.released}
            genres={game.genres.map(genre => genre.name)} 
            ranking={game.rating}
            platforms={transformPlatforms(game.parent_platforms)}
            mode={DarkMode}
            onClick={() => HandleOpenModal(game.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
