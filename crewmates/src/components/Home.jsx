import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import soccer_squad from '../assets/soccer_squad.png';

const Home = () => {
    return (
        <div>
            
            <h3>Create your footballer and join the squad!</h3>

            <h1>Home</h1>

            <img className="home_img" src= {soccer_squad} alt="" />
        </div>
    )
}

export default Home;
