
//CSS
import './hero.css'
// animation Aos
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="containerhero">
        
            <div className="herosection2">
                <h1 className="title" data-aos="fade-down" >Le monde d'Harry Potter</h1>
                <div >
                    <a href='#contintro' className="btn"> <span></span> Découvrir</a>
                </div>
            </div>
            
            
        </div>
)
    
}

export default Hero