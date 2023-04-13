import React from 'react';
import './Pokecard.css'

// Individual card.

const base_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const Pokecard = ({ id, name, type, base_experience }) => {
    let imgUrl = `${base_url}${id}.png`
    return (
                <div className='Pokecard' key={id}>
                    <div className='Pokecard-name'>{name}</div>
                    <div className='Pokecard-data'>Type: {type}</div>
                    <img className='Pokecard-img' alt='pokemon' src={imgUrl} ></img>
                    <div className='Pokecard-data'>Base Exp: {base_experience}</div>
                </div>
            )
}

export default Pokecard;