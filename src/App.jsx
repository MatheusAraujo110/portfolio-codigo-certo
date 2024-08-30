import NavBar from './components/NavBar/NavBar'
import AboutMe from './components/AboutMe/AboutMe'
import PersonalTastes from "./components/PersonalTastes/PersonalTastes"
import Motivations from "./components/Motivations/Motivations"

import Avatar from './assets/Avatar.jpeg'

import './App.css'

function App() {

  return (
    <>
      <NavBar />

      <section className='container-app'>
        <div className='caixa-app'>
          <h2>Desenvolvedor Front-End</h2>
          <h3>Matheus Araujo</h3>
        </div>
        <img src={Avatar} alt="avatar" className='avatar' />
      </section>

      <AboutMe />
      <PersonalTastes />
      <Motivations />
    </>
  )
}

export default App
