import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createClient} from '@supabase/supabase-js'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import List from './components/List'; 
import Player from './components/Player'



const supabaseUrl = 'https://smywirsxepshhyxgcdzs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNteXdpcnN4ZXBzaGh5eGdjZHpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4OTQzMDUsImV4cCI6MjAxNDQ3MDMwNX0.5ZIAAbJo-rwNJYINoE4mnTFCH5DKnMztqc4mZZ4dpKo';

const supabase = createClient(supabaseUrl, supabaseKey);



function App() {

  const [players, setPlayers] = useState([]);

  async function deletePlayer(id) {
    const {data, error} = await supabase.from('Players').delete().eq('id', id);
    console.log(data);
    console.log(error);
    alert('Player Deleted!')
    getPlayers();
  }

  async function getPlayers() {
    const {data: players} = await supabase.from('Players').select('*');
    setPlayers(players);
  }

  useEffect(() => {
    getPlayers();
  }, [])  

  return (
    <BrowserRouter>
    <div className='app'>

      <div className='nav-bar'>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/create">
          <button>Create New Player</button>
        </Link>
        <Link to="/list">
          <button>Player List</button>
        </Link>
       
      </div>


      <h1>Hamza's Football Club</h1>
      
    </div>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create supabase = {supabase} />} />
      {/* <Route path="/update" element={<Update />} />    */}
      <Route path="/list" element={<List players = {players}/>} />
      <Route path='/player/:id' element={<Player supabase= {supabase} deletePlayer={deletePlayer} />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
