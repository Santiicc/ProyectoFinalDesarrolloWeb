import { useState } from 'react'

import './App.css'
import Card from './Components/Card'
import BigCard from './Components/BigCard'
import ModalGenres from "./Utils/ModalGenres"
import CardContainer from './Utils/CardContainer'
import WishListButton from './Utils/WishListButton'
import Switch from './Utils/Switch'
import GameTrailer from './Utils/DivTrailer'
import PurchaseButton from './Utils/ButtonPurchase'
import { useEffect } from 'react'
import { getGames } from './Api/api'

function App() {
  const [count, setCount] = useState(0)

  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gamesData = await getGames();
        setGames(gamesData);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchData();
  }, []);
  
  const exampleData = [
    {
      photogame: 'https://th.bing.com/th/id/R.f73d8efb44084da88756da6779eed573?rik=qqRvg4muwgW2sw&pid=ImgRaw&r=0',
      namegame: "Ejemplo 1",
      date: "2024-06-09",
      genres: ["Aventura", "Acción"],
      ranking: 4.5,
      platforms: ["PC", "PlayStation"],
      description:"holalaolaoaslalslalsla"
    },
    {
      photogame: 'https://th.bing.com/th/id/R.f73d8efb44084da88756da6779eed573?rik=qqRvg4muwgW2sw&pid=ImgRaw&r=0',
      namegame: "Ejemplo 2",
      date: "2024-06-10",
      genres: ["Estrategia", "RPG"],
      ranking: 4.2,
      platforms: ["Xbox", "Nintendo Switch"],
      description:"holalaolaoaslalslalsla"
    },
    {
      photogame: 'https://th.bing.com/th/id/R.f73d8efb44084da88756da6779eed573?rik=qqRvg4muwgW2sw&pid=ImgRaw&r=0',
      namegame: "Ejemplo 3",
      date: "2024-06-11",
      genres: ["Deportes", "Simulación"],
      ranking: 4.8,
      platforms: ["PlayStation", "Xbox"],
      description:"holalaolaoaslalslalsla"
    },
    {
      photogame: 'https://th.bing.com/th/id/R.f73d8efb44084da88756da6779eed573?rik=qqRvg4muwgW2sw&pid=ImgRaw&r=0',
      namegame: "Ejemplo 3",
      date: "2024-06-11",
      genres: ["Deportes", "Simulación"],
      ranking: 4.8,
      platforms: ["PlayStation", "Xbox"],description:"holalaolaoaslalslalsla"
    },
    {
      photogame: 'https://th.bing.com/th/id/R.f73d8efb44084da88756da6779eed573?rik=qqRvg4muwgW2sw&pid=ImgRaw&r=0',
      namegame: "Ejemplo 3",
      date: "2024-06-11",
      genres: ["Deportes", "Simulación"],
      ranking: 4.8,
      platforms: ["PlayStation", "Xbox"],description:"holalaolaoaslalslalsla"
    },
    {
      photogame: 'https://th.bing.com/th/id/R.f73d8efb44084da88756da6779eed573?rik=qqRvg4muwgW2sw&pid=ImgRaw&r=0',
      namegame: "Ejemplo 3",
      date: "2024-06-11",
      genres: ["Deportes", "Simulación"],
      ranking: 4.8,
      platforms: ["PlayStation"],description:"holalaolaoaslalslalsla"
    },
    {
      photogame: 'https://th.bing.com/th/id/R.f73d8efb44084da88756da6779eed573?rik=qqRvg4muwgW2sw&pid=ImgRaw&r=0',
      namegame: "Ejemplo 3",
      date: "2024-06-11",
      genres: ["Deportes", "Simulación"],
      ranking: 4.8,
      platforms: ["PlayStation", "Xbox"],description:"holalaolaoaslalslalsla"
    },
    ,
    {
      photogame: 'https://th.bing.com/th/id/R.f73d8efb44084da88756da6779eed573?rik=qqRvg4muwgW2sw&pid=ImgRaw&r=0',
      namegame: "Ejemplo 3",
      date: "2024-06-11",
      genres: ["Deportes", "Simulación"],
      ranking: 4.8,
      platforms: ["PlayStation", "Xbox"],description:"holalaolaoaslalslalsla"
    },
    ,
    {
      photogame: 'https://th.bing.com/th/id/R.f73d8efb44084da88756da6779eed573?rik=qqRvg4muwgW2sw&pid=ImgRaw&r=0',
      namegame: "Ejemplo 3",
      date: "2024-06-11",
      genres: ["Deportes", "Simulación"],
      ranking: 4.8,
      platforms: ["PlayStation", "Xbox"],description:"holalaolaoaslalslalsla"
    },
    ,
    {
      photogame: 'https://th.bing.com/th/id/R.f73d8efb44084da88756da6779eed573?rik=qqRvg4muwgW2sw&pid=ImgRaw&r=0',
      namegame: "Ejemplo 3",
      date: "2024-06-11",
      genres: ["Deportes", "Simulación"],
      ranking: 4.8,
      platforms: ["PlayStation", "Xbox"],description:"holalaolaoaslalslalsla"
    },
    ,
    {
      photogame: 'https://th.bing.com/th/id/R.f73d8efb44084da88756da6779eed573?rik=qqRvg4muwgW2sw&pid=ImgRaw&r=0',
      namegame: "Ejemplo 3",
      date: "2024-06-11",
      genres: ["Deportes", "Simulación"],
      ranking: 4.8,
      platforms: ["PlayStation", "Xbox"],description:"holalaolaoaslalslalsla"
    },
    // Agrega más datos de ejemplo según sea necesario
  ];

  return (
    
    /*
    ------------------------BIG CARD----------------------------------------------*/
    /*
    <BigCard photogame={'https://th.bing.com/th/id/R.f73d8efb44084da88756da6779eed573?rik=qqRvg4muwgW2sw&pid=ImgRaw&r=0'} mode={'dark'}
    namegame={'BioMutantaaa'} date={'21/4/2022'} genres={['Rol','Rpg','Competitive',"aaaaaaaaaaaaaaaaaaaa"]} ranking={'42'} platforms={['PlayStation',"Xbox","Pc"]} description={'Game’s description goes over here: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur claudiogay consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur'}
    >

    </BigCard>*/
    


  /*----------------------------------MODALGENRES--------------------*/
  
    /*<ModalGenres genres={['Rol','Rpg','ADventura','Anime','Incredible','Crossplay']}></ModalGenres>*/
  

  /*------------------------------CARD-------------------------------------------*/
  /*
    <Card photogame={'https://th.bing.com/th/id/R.f73d8efb44084da88756da6779eed573?rik=qqRvg4muwgW2sw&pid=ImgRaw&r=0'}
    namegame={'BioMutantaaa'} date={'21/4/2022'} genres={['Rol','Rpg','Competitive','Sandbox']} ranking={'42'} platforms={['PlayStation',"XboxOne","Pc",'Switch']} mode={'LIGTH'}>
    </Card>
  */

   /*-----------------------SWITCH-------------------------------*/ 
  /*
  <Switch color={'green'}></Switch>*/
 
 
  /*----------------CARDCONTAINER--------------------*/
  
    <CardContainer data={exampleData}></CardContainer>

    /*console.log(games)*/

   /* -------------------GAMETRAILER-------------------------*/
   
   /*<GameTrailer trailerUrl={"https://www.youtube.com/watch?v=K7wW6V0OiIU"} backgroundImage={"https://assets-prd.ignimgs.com/2024/06/09/call-of-duty-black-ops-6-1717943259180.jpg"}></GameTrailer>
  */
 
  /*<WishListButton></WishListButton>*/

  /*<PurchaseButton></PurchaseButton>*/
   )
}

export default App
