import './index.css'

import { useState } from "react";

const Cardperson = (props) => {
    
    const [show, setShow] = useState(false);
    
    return (
        <div className="card-person"
            

        >
            <div className="card-image">
                <img src={props.imageUrl} alt="img" className='imga-card' />
            </div>
            <div className="card-content">
               
                <p onClick={() => {
                    setShow(true);
                }}
                >{props.name}</p>
                
               
                   
                
              
            </div>
            
        
            {/* modale.ici */}
            
            {show === true ? (
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
                                    <div className='etat' ></div>
                                    <li>état   </li>
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
             ): null}
            
            
            
            
        </div>
)
} 

export default Cardperson