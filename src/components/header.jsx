import React from 'react'
import './Header.css'

const Header = ({image, title}) => {
    return (
        <header className="header">
        <img src={image} alt="headerlogo" className="header-image"></img>
        <h1 className="header-title">{title}</h1>
        </header>
    )
}

export default Header;