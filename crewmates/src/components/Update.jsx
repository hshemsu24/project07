import React from "react";
import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';



const Update = ({player, onSubmit}) => {
    const [name, setName] = React.useState(player.player_name);
    const [position, setPosition] = React.useState(player.favorite_position);
    const [foot, setFoot] = React.useState(player.preferred_foot);
    const [skill, setSkill] = React.useState(player.skill);
    const [cleats, setCleats] = React.useState(player.cleat_color);

    const positions = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'];
    const footOptions = ['Right', 'Left'];
    const skillOptions = ['Speed', 'Shot Power', 'Dribbling', 'Jumping', 'Passing'];
    const cleatColors = ['Black', 'White', 'Red', 'Blue', 'Green', 'Pink', 'Yellow'];

    async function updatePlayer() { 

        if(name === '' || position === '' || foot === '' || skill === '' || cleats === '') {
            alert('Please fill out all fields!')
            //console.log(player + 'player');
            return;
        } else {
            await onSubmit(name, position, foot, skill, cleats);
        }

        
    }


    return (
        <div>
            <div className="create_card">

                {player ? (
                    <form>
                    {/* <div> */}
                        <label>Player Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                        
                    {/* </div> */}
                    <label>Position Played:</label>
                    <select value={position} onChange={(e) => setPosition(e.target.value)}>
                        <option value="" disabled>Select Position</option>
                        {positions.map((position, index) => (
                            <option key={index} value={position}>{position}</option>
                        ))}
                    </select>
                    <label>Preferred Foot:</label>
                    <select value={foot} onChange={(e) => setFoot(e.target.value)}>
                        <option value="" disabled>Select Foot</option>
                        {footOptions.map((foot, index) => (
                            <option key={index} value={foot}>{foot}</option>
                        ))}
                    </select>
                    <label>Skill:</label>
                    <select value={skill} onChange={(e) => setSkill(e.target.value)}>
                        <option value="" disabled>Select Skill</option>
                        {skillOptions.map((skill, index) => (
                            <option key={index} value={skill}>{skill}</option>
                        ))}
                    </select>
                    <label>Cleat Color:</label>
                    <select value={cleats} onChange={(e) => setCleats(e.target.value)}>
                        <option value="" disabled>Select Cleat Color</option>
                        {cleatColors.map((cleats, index) => (
                            <option key={index} value={cleats}>{cleats}</option>
                        ))}
                    </select>
                    <div><button onClick={updatePlayer}>Update</button></div>
                </form>

                 ) : (
                        <h1>Loading...</h1>
                )}

                
            </div>
        </div>
    )
}

export default Update;
