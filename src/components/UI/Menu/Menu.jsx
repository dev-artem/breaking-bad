import React from 'react'
import { Link } from 'react-router-dom';

import './menu.scss'

const Menu = () => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__list-item"><Link to="/about">About</Link></li>
                <li className="menu__list-item"><Link to="/characters">Characters</Link></li>
                <li className="menu__list-item"><Link to="/episodes">Episodes</Link></li>
                <li className="menu__list-item"><Link to="/order">Order</Link></li>
            </ul>
        </nav>
    )
}

export default Menu
