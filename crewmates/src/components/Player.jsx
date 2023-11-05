import React from "react";
import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import Update from "./Update";

const Player = ({supabase, deletePlayer}) => {
    const {id} = useParams();
    const [player, setPlayer] = useState(null);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        getPlayerDet();
    }, [id])

    async function getPlayerDet() {
        const {data, error} = await supabase.from('Players').select('*').eq('id', id).single();
        if (error) {
            console.error('Error fetching player: ', error);
        } else {
             setPlayer(data);
        //console.log(data);
        } 
       
    }

    async function handleDelete(id) {
        await deletePlayer(id);
        window.location = '/list';
    }

    async function handleUpdate(name, position, foot, skill, cleats) {
        await supabase.from('Players').update({player_name: name, favorite_position: position, preferred_foot: foot, skill: skill, cleat_color: cleats}).eq('id', id).select();
        await getPlayerDet();
        setEditing(false);
    }


    return (
        <div className="player_details">
            
            {editing ? (
                <Update 
                    player = {player} 
                    onSubmit = {handleUpdate}
                />
            ) : (
                <div className="details">
                    {player ? (
                        <><h1>Player Details</h1>
                        <h2>{player.player_name}</h2>
                        <p>Position Played: {player.favorite_position}</p>
                        <p>Preferred Foot: {player.preferred_foot}</p>
                        <p>Skill: {player.skill}</p>
                        <p>Cleat Color: {player.cleat_color}</p>
                        <button onClick={() => handleDelete(id)}>Delete</button>
                        <button onClick={() => setEditing(true)}>Edit</button></>
                    ) : (
                        <h1>Loading...</h1>
                    )}
                    
                </div>
            )}
        </div>
    )
}

export default Player;

