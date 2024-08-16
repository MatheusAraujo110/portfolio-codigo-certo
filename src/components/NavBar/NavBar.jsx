import React from 'react'
import './NavBar.css'
import Logo from "../../assets/Logo (2).jpeg"

function NavBar() {

    return (
        <header className='header'>
            <img href='#home' src={Logo} alt="logo" className='logo' />

            <nav className='navbar'>
                <a href='#aboutme'>Sobre mim</a>
                <a href='#personal-tastes'>Gostos Pessoais</a>
                <a href='#motivations'>Motivações</a>
            </nav>
        </header>
    )
}

export default NavBar