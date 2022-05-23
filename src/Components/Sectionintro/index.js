import './intro.css';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Sectionintro = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div className="containerintro" id='contintro' >
            <div className='intro-text'>
            <div className="quare"></div>
            <h2 className="intro" data-aos="fade-down" >Bienvenu dans le monde Harry potter</h2>
                <p className="intro" data-aos="fade"  >Faites appel à vos meilleurs souvenirs et notre expérience officielle du Patronus vous aidera à créer votre propre protecteur animal magique en argent. Des créatures magiques aux différentes races de chats, quel sera le vôtre ?</p>
            </div>
        </div>
)
}

export default Sectionintro