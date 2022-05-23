import './index.css'

import { useState } from "react";
import Modal from '../Modal/modale';

const Cardperson = (props) => {
    
    const [show, setShow] = useState(false);
    
    return (
        <>
        <div className="card-person"
            

        >
            <div className="card-image">
                <img src={props.person.image} alt="img" className='imga-card' />
            </div>
            <div className="card-content">
               
                <p 
                >{props.person.name}</p>
                
                    
                </div>
                <div className="activemodale">
                    <p onClick={() => {
                        setShow(true);
                    }} >+</p>
                </div>
            
        
            {/* modale.ici */}
            
            
            
            
            
            
        </div>
        
            {show === true ? (
                <Modal person={props.person} setShow={setShow} />
            ) : null}
    
   </>
        
)
} 

export default Cardperson