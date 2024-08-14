import './NavBar.css'
import Logo from "../../assets/Logo (2).jpeg"

function NavBar() {

    return (
        <section className='container-header'>
            <nav className='header'>
                <a href='#aboutme' className='link'>Sobre mim</a>
                <a href='#personal-tastes' className='link'>Gostos Pessoais</a>
                <a href='#motivations' className='link'>Motivações</a>
            </nav>
            <img src={Logo} alt="logo" className='logo'/>
        </section>
    )
}

export default NavBar