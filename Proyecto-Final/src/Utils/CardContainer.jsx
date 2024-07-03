import React, { useState, useEffect } from "react";
import classes from "../Styles/CardContainer.module.css";
import Card from "../Components/Card";
import Switch from "../Utils/Switch";
import Text_Subtext from "./Text&Subtext";
import { getGameById, getGames } from "../Api/api";
import GiantCard from "../Components/GiantCard";
import Sidebar from "../Components/sidebar";
import BigCard from "../Components/BigCard"; 
import SearchBar from "../Components/SearchBar";

const CardContainer = () => {
  const [DarkMode, setDarkMode] = useState("light");
  const [BackgroundColor, setBackgroundColor] = useState("#F0F0F0");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [games, setGames] = useState([]);
  const [isBigCardView, setIsBigCardView] = useState(false); 

  useEffect(() => {
    const fetchGames = async () => {
      const fetchedGames = await getGames();
      const gamesWithDescription = await Promise.all(
        fetchedGames.map(async (game) => {
          if (!game.description) {
            const fullGameData = await getGameById(game.id);
            return fullGameData;
          }
          return game;
        })
      );
      setGames(gamesWithDescription);
    };
    fetchGames();
  }, []);

  const switchDarkMode = () => {
    if (DarkMode === "dark") {
      setDarkMode("light");
      setBackgroundColor("#F0F0F0");
    } else {
      setDarkMode("dark");
      setBackgroundColor("#151515");
    }
  };

  const transformPlatforms = (parentPlatforms) => {
    return parentPlatforms.map((platformObj) => platformObj.platform.name);
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

  const toggleView = () => {
    setIsBigCardView(!isBigCardView);
  };

  return (
    <div className={classes.DivGral} style={{ backgroundColor: BackgroundColor }}>
      {isModalVisible && selectedGame && (
        <div className={classes.modalOverlay} style={{ display: "flex" }}>
          <GiantCard
            photogame={selectedGame.background_image}
            namegame={selectedGame.name}
            date={selectedGame.released}
            genres={selectedGame.genres.map((genre) => genre.name)}
            platforms={transformPlatforms(selectedGame.parent_platforms)}
            description={selectedGame.description}
            developer={"DeveloperTest"}
            website={selectedGame.website}
            onClick={handleCloseModal}
            mode={DarkMode}
          />
        </div>
      )}
      <div className={classes.DivSearch}><SearchBar></SearchBar></div>
      <div className={classes.Switch}>

        <div className={classes.NwTre}>
        <Text_Subtext
          mode={DarkMode}
          Text={"New and Trending"}
          Subtext={"Based on player counts and release date"}
        /></div>
        <div>

        <div className={classes.SwDiv}>
          <p className={classes.Psw} style={{color:DarkMode==="dark"?'white':'black'}}>Dark Mode</p>
          <Switch color={"green"} onChangeHandler={switchDarkMode} />
        </div>
        
        <div className={classes.VwDiv}>
          <p className={classes.Psw} style={{color:DarkMode==="dark"?'white':'black'}}>Cambio de vista</p>
          <Switch color={"blue"} onChangeHandler={toggleView} />
        </div>

        
        </div>
      </div>

      <div className={classes.DivSide_Cards}>
        <div className={classes.DivSide}>
          <Sidebar mode={DarkMode} />
        </div>
        
        <div className={classes.Container} style={{ justifyContent: isBigCardView ? "center" : "flex-start" }}>
          {isBigCardView ? (
            games.map((game, index) => (
              <BigCard
                key={index}
                photogame={game.background_image}
                namegame={game.name}
                date={game.released}
                genres={game.genres.map((genre) => genre.name)}
                ranking={game.rating}
                platforms={transformPlatforms(game.parent_platforms)}
                description={game.description}
                mode={DarkMode}
                onClick={() => HandleOpenModal(game.id)}
              />
            ))
          ) : (
            games.map((game, index) => (
              <Card
                key={index}
                gameId={game.id}
                photogame={game.background_image}
                namegame={game.name}
                date={game.released}
                genres={game.genres.map((genre) => genre.name)}
                ranking={game.rating}
                platforms={transformPlatforms(game.parent_platforms)}
                mode={DarkMode}
                onClick={() => HandleOpenModal(game.id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
