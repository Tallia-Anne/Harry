import './index.css'
//Animation Aos
import Aos from 'aos';
import "aos/dist/aos.css"
//import useEffect
import { useEffect } from 'react';

const SectionAbout = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    
    return (
        <div className="containerabout">
            <div className='about-text'>
                <div className="quare"></div>
               
                <div className="sec-services">
                    <h2 data-aos="fade-down" >A propos</h2>
                    <div className="services">
                        <div className="single-service" data-aos="fade" >
                            <div className="service-icon">
                                <i></i>
                            </div>
                            <h4>Les personnages</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="single-service" data-aos="fade" >
                            <div className="service-icon">
                                <i></i>
                            </div>
                            <h4>Les maisons</h4>
                            <p>Découvrir les maisons du chateau</p>
                        </div>
                        <div className="single-service" data-aos="fade" >
                            <div className="service-icon">
                                <i></i>
                            </div>
                            <h4>Les animaux compagnie</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
       
            </div>
        </div>
    )
}

export default SectionAbout