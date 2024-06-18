export const getGames = async () => {
    const url = "https://api.rawg.io/api/games?key=990db89b2ae64cecbdceca51022ef2a2&dates=2019-09-01,2019-09-30&platforms=18,1,7";
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
  
  