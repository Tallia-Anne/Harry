//CSS
import './index.css'
//Les liens
import { Link } from 'react-router-dom'
//animation Aos
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const SectionParallaxe = () => {
    
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    
    return (
        
        
        <div className="containerParallaxe">
            <div className="box-img">
                <div className="text">
                    
                </div>
            </div>
            <div className="box-img">
                <div className="text">
                    <h1 data-aos="fade-down" >Maisons de Poudlard</h1>
                    <p className="text-p" data-aos="fade" >Les maisons sont au nombre de quatre.
                        Elles ont pour nom Gryffondor,
                        Poufsouffle, Serdaigle et Serpentard.
                        Chaque maison a sa propre histoire,
                        sa propre noblesse, et chacune
                        d'elles a formé au cours des ans
                        des sorciers et des sorcières de
                        premier plan.</p>
                    <Link to="/house" >  <button> <span></span>Découvrir les blasons</button> </Link>
                </div>
            </div>
        </div>
)
    
} 

export default SectionParallaxe