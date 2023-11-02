import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://smywirsxepshhyxgcdzs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNteXdpcnN4ZXBzaGh5eGdjZHpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4OTQzMDUsImV4cCI6MjAxNDQ3MDMwNX0.5ZIAAbJo-rwNJYINoE4mnTFCH5DKnMztqc4mZZ4dpKo';

const supabase = createClient(supabaseUrl, supabaseKey);

//still need to create a table

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
