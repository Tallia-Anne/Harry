import './index.css'
import { Link } from "react-router-dom";
import image404 from "../../Components/assets/harry_potter_fanart_08_by_vladislavpantic_dcu3ave-fullview.jpg";
const erreur = () => {
    return (
        
        <div className="bg-404" style={{ backgroundImage: `url(${image404})` }} >
           <div>
                <h1>404</h1>
            
            
            <div className="btn">
                    <Link to="/" className='button'>Acceuil</Link>
                <div className="fond"></div>
                </div>
            </div>
        </div> 
       
    )
}
export default erreur