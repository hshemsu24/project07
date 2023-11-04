import React from "react";
import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';



const List = ({players}) => {
    return (
            <div>
                <h1>Hamza FC Roster</h1>


                <div className="card_container">
                    <ul>
                        {players.map((player) => (
                            <li key={player.id} className="card">
                                <Link to={`/player/${player.id}`}>
                                    {player.player_name}
                                </Link>

                                <p>Position Played: {player.favorite_position}</p>
                                <p>Preferred Foot: {player.preferred_foot}</p>
                                <p>Skill: {player.skill}</p>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
    )
}

export default List;
