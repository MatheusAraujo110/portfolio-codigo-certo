import '../AboutMe/AboutMe.css'
import Computer from "../../assets/ImagemComputer.jpg"

function AboutMe() {

    return (
        <section className='container-about' id='aboutme'>
            <h1 className='about-h1'>Sobre mim</h1>
            <img src={Computer} alt="Computer" className='img-computer' />
            <div className='container-p'>
                <p className='about-p'>Me chamo Matheus, tenho 23 anos, sou do Rio de Janeiro.</p>
                <br />
                <p className='about-p'>Estou em transição de carreira, atualmente trabalho como ajudante de armazem e meu sonho é conseguir o meu primeiro emprego na área para evoluir profissionalmente como dev. Quando vi que tinha chance de crescer na carreira de dev, fiquei super empolgado para mudar de vida.</p>
                <br />
                <p className='about-p'>Com essa oportunidade da <span>Codigo Certo</span>, vai me ajudar bastante na carreira profissional.</p>
            </div>
        </section>
    )
}

export default AboutMe