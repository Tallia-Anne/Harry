
import './gallerie.css'

import { Link } from "react-router-dom";

import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Sectiongalerie = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    
    return (
        <div className="Sectiongalerie">
           
            <div className="contenaircardgalerie">
                
                <div className=" galerie item1 "  >
                    <div className="bordure">
                        <Link to="/book" ><p data-aos="fade-down">Les Tomes d'harry potter</p></Link>
                    </div>
                </div>
                <div className=" galerie item2 ">
                    <div className="bordure">
                        <Link to="/characters" ><p data-aos="fade-down">Les personnages</p></Link>
                    </div>
                </div>
                <div className=" galerie item3 ">
                    <div className="bordure">
                        <Link to="/house" > <p data-aos="fade-down" >Les maisons</p></Link>
                    </div>
                </div>
            </div>
        </div>
        
)
    
}

export default Sectiongalerie