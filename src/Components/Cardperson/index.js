import './index.css'

import { useState } from "react";

const Cardperson = (props) => {
    
    const [show, setShow] = useState(false);
    
    return (
        <>
        <div className="card-person"
            

        >
            <div className="card-image">
                <img src={props.imageUrl} alt="img" className='imga-card' />
            </div>
            <div className="card-content">
               
                <p 
                >{props.name}</p>
                
                    
                </div>
                <div className="activemodale">
                    <p onClick={() => {
                        setShow(true);
                    }} >+</p>
                </div>
            
        
            {/* modale.ici */}
            
            
            
            
            
            
        </div>
        
        {
        show === true ? (
            <div
                className="myModal"
                onClick={() => {
                    setShow(false);
                }}
            >
                <div className="conmodal">

                    <div className='modal-img'>
                        <img src={props.imageUrl} alt="" />
                    </div>
                    <div className='modal-text'>
                        <div className="modaltitle">
                            <h1>{props.name}</h1>
                        </div>
                        <div className="modaltsuvitle">
                                    <ul>
                                <li>état   </li>
                                <div className='etat' ></div>
                                
                                <li>maison: {props.house} </li>
                                <li>Année: {props.yearOfBirth} </li>
                            </ul>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda at soluta ad rem.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti error ullam nostrum.
                        </p>
                        <button>Fermer</button>

                    </div>
                </div>


            </div>
        ) : null
    }
    
   </>
        
)
} 

export default Cardperson