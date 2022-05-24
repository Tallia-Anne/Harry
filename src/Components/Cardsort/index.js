import './index.css'

// animation Aos
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Cardsort = (props) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <>
            <div className="card-sorts" data-aos="fade"  >
               
                <div className="card-content-sort">
                    
                    <p className='title'>{props.name}</p>  
                    <p>{props.text}</p>
            </div>
        </div>
        
        </>
)
}

export default Cardsort