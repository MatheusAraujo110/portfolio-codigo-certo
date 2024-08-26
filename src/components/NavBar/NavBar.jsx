import React from 'react'
import './NavBar.css'
import Logo from "../../assets/Logo (2).jpeg"

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        })
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animateLinks()
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent()
        }
        return this
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)
mobileNavbar.init()

function NavBar() {

    return (
        <header className='header'>
            <img src={Logo} alt="logo" className='logo' />

            <nav className='navbar'>
                <div className='mobile-menu'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
                <ul className='nav-list'>
                    <a href='#'>Home</a>
                    <li><a href='#aboutme'>Sobre mim</a></li>
                    <li><a href='#personal-tastes'>Gostos Pessoais</a></li>
                    <li><a href='#motivations'>Motivações</a></li>
                </ul>
            </nav>
        </header >
    )
}

export default NavBar