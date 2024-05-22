import React, { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [games, setGames] = useState([
    'Mario Party 1',
    'Mario Party 2',
    'Mario Party 3',
    'Mario Party 4',
  ]);

  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    setSearch(search);
    const filteredGames = games.filter((game) =>
      game.toLowerCase().includes(search));
    setGames(filteredGames);
  };
  

  return (
    <div>
      <input
        type="search"
        value={search}
        onChange={handleSearch}
        placeholder="Search game..."
      />
    <button onClick={handleClear}>Delete</button>
      <ul>
        {filteredGames.map((game) => (
          <li key={game}>Game Name</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;