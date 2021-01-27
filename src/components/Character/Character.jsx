import React from 'react'

export const Character = ({character}) => {
    return (
        <div>
            <img src={character.img} alt=""/>
            {character.name}
        </div>
    )
}
