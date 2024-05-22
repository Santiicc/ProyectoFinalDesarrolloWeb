import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Card photogame={'https://th.bing.com/th/id/R.f73d8efb44084da88756da6779eed573?rik=qqRvg4muwgW2sw&pid=ImgRaw&r=0'}
    namegame={'BioMutant'} date={'21/4/2022'} genres={['Rol','Rpg']} ranking={'42'} platforms={['PlaySa']}
    >

    </Card>
  )
}

export default App
