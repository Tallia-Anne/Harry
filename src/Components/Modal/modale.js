
import './index.css'

const Modal = (props) => {
    
    return (
        <div
            className="myModal"
            onClick={() => {
                props.setShow(false);
            }}
        >
            <div className="conmodal">

                <div className='modal-img'>
                    <img src={props.person.image} alt="" />
                </div>
                <div className='modal-text'>
                    <div className="modaltitle">
                        <h1>{props.person.name}</h1>
                    </div>
                    <div className="modaltsuvitle">
                        <ul>
                            <li>état   </li>
                            <div className='etat' ></div>

                            <li>maison: {props.person.house} </li>
                            <li>Année: {props.person.yearOfBirth} </li>
                        </ul>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda at soluta ad rem.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti error ullam nostrum.
                    </p>
                    <button>Fermer</button>

                </div>
            </div>


        </div>
)
    
} 

export default Modal