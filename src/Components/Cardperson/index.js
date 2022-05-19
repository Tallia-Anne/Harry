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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_Panda_%2824986761703%29.jpg/220px-Red_Panda_%2824986761703%29.jpg"  alt='imgmodal'/>
                </div>
            ) : null}
            
            
            
            
        </div>
)
} 

export default Cardperson