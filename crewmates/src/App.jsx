import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createClient} from '@supabase/supabase-js'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


const supabaseUrl = 'https://smywirsxepshhyxgcdzs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNteXdpcnN4ZXBzaGh5eGdjZHpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4OTQzMDUsImV4cCI6MjAxNDQ3MDMwNX0.5ZIAAbJo-rwNJYINoE4mnTFCH5DKnMztqc4mZZ4dpKo';

const supabase = createClient(supabaseUrl, supabaseKey);

//still need to create a table

function App() {

  return (
    <div>
      <h1>Hamza's Football Club</h1>
      <h3>Create your footballer and join the squad!</h3>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/create" element={<Create />} />
          
          <Route path="/update" element={<Update />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
