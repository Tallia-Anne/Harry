import './galerie.css'

import { Link } from "react-router-dom";

const imagehouse1 = "https://i.pinimg.com/474x/89/8b/65/898b659081e07c010f63027d26311c23.jpg"
const imagehouse2 = "https://i.pinimg.com/474x/7c/fb/3d/7cfb3d5d19ab82e374face0180dde0b5.jpg"
const imagehouse3 = "https://i.pinimg.com/564x/65/43/83/654383052d0f410a596e7ca85101ebb5.jpg"
const imagehouse4 = "https://i.pinimg.com/474x/85/1c/26/851c26923aed61a51581298c86d0b439.jpg"



const Galeriehouse = () => {


    return (
        <div className="container-house">
            <div className="itemhouse house1" style={{ backgroundImage: `url(${imagehouse2})` }} >
                <div className="overlay">
                    <div className="cardre">
                        <Link to="/griffindor" > <h1>Griffindor</h1></Link>
                    </div>
                </div>
            </div>
            <div className="itemhouse house2" style={{ backgroundImage: `url(${imagehouse1})` }} >
                <div className="overlay">
                    <div className="cardre">
                        <Link to="/ravenclaw"> <h1>Ravenclaw</h1></Link> 
                    </div>
                </div>
            </div>
            <div className="itemhouse house3" style={{ backgroundImage: `url(${imagehouse3})` }} >
                <div className="overlay">
                    <div className="cardre">
                        <Link to="/hufflepuff" > <h1>Hufflepuff</h1> </Link>
                    </div>
                </div>
            </div>
            <div className="itemhouse house4" style={{ backgroundImage: `url(${imagehouse4})` }} >
                <div className="overlay">
                    <div className="cardre">
                        <Link to="/serpent" ><h1>Slytherin</h1></Link> 
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Galeriehouse