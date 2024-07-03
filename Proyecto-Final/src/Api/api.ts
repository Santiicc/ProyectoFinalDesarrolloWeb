export const getGames = async () => {
    const url = "https://api.rawg.io/api/games?key=990db89b2ae64cecbdceca51022ef2a2&page_size=40&dates=2023-09-01,2023-11-30";
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data.results; 
      } else {
        console.error("An error occurred while fetching games:", response.statusText);
        return [];
      }
    } catch (error) {
      console.error("Error fetching games:", error);
      return [];
    }
  };



  export const getGameById = async (gameId) => {
    const url = `https://api.rawg.io/api/games/${gameId}?key=990db89b2ae64cecbdceca51022ef2a2`;
  
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data; 
      } else {
        console.error("An error occurred while fetching the game:", response.statusText);
        return null;
      }
    } catch (error) {
      console.error("Error fetching the game:", error);
      return null;
    }
  };
  