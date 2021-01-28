import React from 'react'
import { Link } from 'react-router-dom';

import Menu from '../Menu';

import './header.scss'

const Header = ({bgColor}) => {
    return (
        <header className="header" style={bgColor}>
            <div className="container">
                <div className="header__inner">
                    <Link to="/" className="header__logo">
                        <img src="./img/logo.png" alt="logo"/>
                    </Link>
                    <div className="header__menu">
                        <Menu className="header__menu" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
