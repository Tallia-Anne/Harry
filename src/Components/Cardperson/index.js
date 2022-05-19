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
                
                <p>{props.yearOfBirth}</p>
                   
                
              
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
                    
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_Panda_%2824986761703%29.jpg/220px-Red_Panda_%2824986761703%29.jpg"  alt='imgmodal'/> */}
                </div>
            ) : null}
            
            
            
            
        </div>
)
} 

export default Cardperson