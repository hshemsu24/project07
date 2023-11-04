import React from "react";
import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';



const Update = (player, onSubmit) => {
    const[name, setName] = useState('');
    const[position, setPosition] = useState('');
    const[foot, setFoot] = useState('');
    const[skill, setSkill] = useState('');
    const[cleats, setCleats] = useState('');

    const positions = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'];
    const footOptions = ['Right', 'Left'];
    const skillOptions = ['Speed', 'Shot Power', 'Dribbling', 'Jumping', 'Passing'];
    const cleatColors = ['Black', 'White', 'Red', 'Blue', 'Green', 'Pink', 'Yellow'];

    async function updatePlayer() { 
        if(name === '' || position === '' || foot === '' || skill === '' || cleats === '') {
            alert('Please fill out all fields!')
            return;
        }

        await onSubmit(name, position, foot, skill, cleats);
    }


    return (
        <div>
            <div className="create_card">
                <form>
                    <label>Player Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <label>Position Played:</label>
                    <select value={position} onChange={(e) => setPosition(e.target.value)}>
                        <option value="" disabled>Select Position</option>
                        {positions.map((position) => (
                            <option value={position}>{position}</option>
                        ))}
                    </select>
                    <label>Preferred Foot:</label>
                    <select value={foot} onChange={(e) => setFoot(e.target.value)}>
                        <option value="" disabled>Select Foot</option>
                        {footOptions.map((foot) => (
                            <option value={foot}>{foot}</option>
                        ))}
                    </select>
                    <label>Skill:</label>
                    <select value={skill} onChange={(e) => setSkill(e.target.value)}>
                        <option value="" disabled>Select Skill</option>
                        {skillOptions.map((skill) => (
                            <option value={skill}>{skill}</option>
                        ))}
                    </select>
                    <label>Cleat Color:</label>
                    <select value={cleats} onChange={(e) => setCleats(e.target.value)}>
                        <option value="" disabled>Select Cleat Color</option>
                        {cleatColors.map((cleats) => (
                            <option value={cleats}>{cleats}</option>
                        ))}
                    </select>
                    <button onClick={updatePlayer}>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update;
