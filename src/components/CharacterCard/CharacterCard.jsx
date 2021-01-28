import React from 'react'

import './charactercard.scss';
export const CharacterCard = ({character}) => {
    const {img, name, nickname} = character;
    return (
        <div className="character-card">
            <img src={img} alt={name} className="character-card__photo"/>
            <div className="character-card__name">{name}</div>
            <div className="character-card__nickname">{nickname}</div>
        </div>
    )
}
