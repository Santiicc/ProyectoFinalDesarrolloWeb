import React, { useState, useEffect, useRef } from "react";
import classes from '../Styles/searchBar.module.css';
import whiteLogo from '../assets/White.png';
import customProfilePic from '../assets/Custom.png';
import circledPic from '../assets/CircledX.png';
import searchIcon from '../assets/Search.png';

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [games, setGames] = useState([
    { id: 1, name: "Mario Party 1" },
    { id: 2, name: "Mario Party 2" },
    { id: 3, name: "Mario Party 3" },
    { id: 4, name: "Wii Sports" },
    { id: 5, name: "EAFC 24" },
    { id: 6, name: "GTA V" },
    { id: 7, name: "Minecraft" },
    { id: 8, name: "LOL" },
  ]);
  const [filteredGames, setFilteredGames] = useState(games);
  const [isFocused, setIsFocused] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    const sortedGames = games.sort((a, b) => a.name.localeCompare(b.name));
    const filteredGames = sortedGames.filter((game) =>
      game.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredGames(filteredGames);
  }, [games, search]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    setShowClearButton(searchTerm.length > 0);
  };

  const handleClear = () => {
    setSearch("");
    setShowClearButton(false);
    inputRef.current.focus();
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowClearButton(search.length > 0);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setTimeout(() => {
      setShowClearButton(false);
    }, 200);
  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logoAndTitle}>
          <img src={whiteLogo} alt="GAMEFINDER Logo" className={classes.logo} />
        </div>
        <div className={classes.searchBarContainer} onFocus={handleFocus} onBlur={handleBlur}>
          <div className={classes.searchBar}>
            <img src={searchIcon} alt="Search Icon" className={classes.searchIcon} />
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search game..."
              className={classes.searchInput}
            />
            {showClearButton && (
              <button className={classes.clearButton} onClick={handleClear}>
                <img src={circledPic} alt="Clear Button" className={classes.clearButtonImg} />
              </button>
            )}
          </div>
          {isFocused && (
            <div className={classes.results}>
              <ul>
                {filteredGames.map((game) => (
                  <li key={game.id}>{game.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={classes.userProfile}>
          <span onClick={handleLogout}>Log out</span>
          <img src={customProfilePic} alt="Profile photo" className={classes.profilePic} />
        </div>
      </header>
    </div>
  );
};

export default SearchBar;
