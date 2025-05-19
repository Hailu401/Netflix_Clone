import react from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Player from './Pages/Play/Player';

function App() {
 

  return (
    <>
      <Routes>
        <Route path="Netflix_Clone/" element={<Home />} />
        <Route path="Netflix_Clone/player/:id" element={<Player />} />
      </Routes>
    </>
  );
}

export default App
