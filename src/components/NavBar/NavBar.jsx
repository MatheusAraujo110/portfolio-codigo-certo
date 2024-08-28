import React, { useState } from 'react'
import './NavBar.css'
import Logo from "../../assets/Logo (2).jpeg"

function NavBar() {
    const [active, setActive] = useState("nav-menu")
    const [toggleIcon, setToggleIcon] = useState("nav-toggler")

    const navToggle = () => {
        active === "nav-menu" ? setActive("nav-menu nav-active") : setActive("nav-menu")
        // TogglerIcon
        toggleIcon === "nav-toggler" ? setToggleIcon("nav-toggler toggle") : setToggleIcon("nav-toggler")
    }

    return (
        <header className='header'>
            <img src={Logo} alt="logo" className='logo' />

            <nav className='nav'>
                <ul className={active}>
                    <a href="#" className="nav-link">Home</a>
                    <li className="nav-item"><a href="#aboutme" className="nav-link">Sobre mim</a></li>
                    <li className="nav-item"><a href="#personal-tastes" className="nav-link">Gostos Pessoais</a></li>
                    <li className="nav-item"><a href="#motivations" className="nav-link">Motivações</a></li>
                </ul>

                <div onClick={navToggle} className={toggleIcon}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar