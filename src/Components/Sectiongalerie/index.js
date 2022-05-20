
import './gallerie.css'

import { Link } from "react-router-dom";

const Sectiongalerie = () => {
    
    
    return (
        <div className="Sectiongalerie">
           
            <div className="contenaircardgalerie">
                
                <div className=" galerie item1 ">
                    <div className="bordure">
                        <Link to="/" ><p>Les Tomes d'harry potter</p></Link>
                    </div>
                </div>
                <div className=" galerie item2 ">
                    <div className="bordure">
                        <Link to="/characters" ><p>Les personnages</p></Link>
                    </div>
                </div>
                <div className=" galerie item3 ">
                    <div className="bordure">
                        <Link to="/house" > <p>Les maisons</p></Link>
                    </div>
                </div>
            </div>
        </div>
        
)
    
}

export default Sectiongalerie