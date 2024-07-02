import React, { useState, useEffect, useRef } from "react";
import classes from '../Styles/searchBar.module.css';
import whiteLogo from '../assets/White.png';
import customProfilePic from '../assets/Custom.png';
import circledPic from '../assets/CircledX.png';
import searchIcon from '../assets/Search.png';

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    const sortedGames = recentSearches.sort((a, b) => a.localeCompare(b));
    const filteredGames = sortedGames.filter((game) =>
      game.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredGames(filteredGames);
  }, [recentSearches, search]);

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

  const handleSearchIconClick = () => {
    setIsFocused(true);
    inputRef.current.focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && search.trim() !== "") {
      const updatedRecentSearches = [search, ...recentSearches].slice(0, 4);
      setRecentSearches(updatedRecentSearches);
      setSearch("");
    }
  };

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logoAndTitle}>
          <img src={whiteLogo} alt="GAMEFINDER Logo" className={classes.logo} />
        </div>
        <div className={classes.searchBarContainer} onFocus={handleFocus} onBlur={handleBlur}>
          <div className={classes.searchBar}>
            <img
              src={searchIcon}
              alt="Search Icon"
              className={classes.searchIcon}
              onClick={handleSearchIconClick}
            />
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={handleSearch}
              onKeyPress={handleKeyPress}
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
                {filteredGames.map((game, index) => (
                  <li key={index}>{game}</li>
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