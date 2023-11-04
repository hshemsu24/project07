import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import player_create from '../assets/player_create.png';
import { useEffect, useState } from 'react'



const Create = ({supabase, onPlayerAdded}) => {
    
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [preferred_foot, setPreferred_foot] = useState('');
    const [skill, setSkill] = useState('');
    const [cleats, setCleats] = useState('');
            
    const positions = ['Attacker', 'Midfielder', 'Defender', 'Goalkeeper'];
    const footOptions = ['Right', 'Left'];
    const skillOptions = ['Speed', 'Shot Power', 'Dribbling', 'Jumping', 'Passing'];
    const cleatColors = ['Black', 'White', 'Red', 'Blue', 'Green', 'Pink', 'Yellow'];
    
    async function createPlayer() {

        if(name === '' || position === '' || preferred_foot === '' || skill === '' || cleats === '') {
            alert('Please fill out all fields!')
            return;
        }

        const {data, error} = await supabase.from('Players').insert([
            {player_name: name, favorite_position: position, preferred_foot: preferred_foot, skill: skill, cleat_color:cleats},
        ])

        console.log(data)
        alert('Player Added!')

        if (error) {
            console.error('Error adding player: ', error)
        } else {
            alert('Player Created!')
            setName('');
            setPosition('');
            setPreferred_foot('');
            setSkill('');
            setCleats('');
            if (onPlayerAdded) {
                onPlayerAdded(data[0]);
            }

        }
    }




    return (
        <div>
            <h2>Add Your New Player to The Squad!</h2>

            <div className="create_card">
                <form>

                    <div><input type="text" placeholder="Player Name" value={name} onChange={(e) => setName(e.target.value)}/></div>
                    
                    <select value={position} onChange={(e) => setPosition(e.target.value)}>
                        <option value="">Select Position</option>
                        {positions.map((pos) => (
                        <option key={pos} value={pos}>
                            {pos}
                        </option>
                        ))}
                    </select>    

                    <select value={preferred_foot} onChange={(e) => setPreferred_foot(e.target.value)}>
                        <option value="">Select Preferred Foot</option>
                        {footOptions.map((foot) => (
                        <option key={foot} value={foot}>
                            {foot}
                        </option>
                        ))}
                    </select>

                    <select value={skill} onChange={(e) => setSkill(e.target.value)}>
                        <option value="">Select Skill</option>
                        {skillOptions.map((sk) => (
                        <option key={sk} value={sk}>
                            {sk}
                        </option>
                        ))}
                    </select>

                    <select value={cleats} onChange={(e) => setCleats(e.target.value)}>
                        <option value="">Select Cleat Color</option>
                        {cleatColors.map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                        ))}
                    </select>

                    <div> <button onClick={createPlayer}>Add Player</button> </div>

                </form>

            </div>

            <img className="home_img" src= {player_create} alt="" />
        </div>
    )
}

export default Create;
