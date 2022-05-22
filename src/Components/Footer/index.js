import './footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    
    return (
        <footer>
            <div className="footer">
                <div className="row-icon">
                    <p> <FontAwesomeIcon icon={faFacebook} />  </p>
                    <p> <FontAwesomeIcon icon={faInstagram} />  </p>
                    <p> <FontAwesomeIcon icon={faYoutube} />  </p>
                    <p> <FontAwesomeIcon icon={faTwitter} />  </p>
                </div>
                <div class="row">
                    <ul>
                        <li><p>Contact us</p></li>
                        <li><p>Our Services</p></li>
                        <li><p>Privacy Policy</p></li>
                        <li><p>Terms & Conditions</p></li>
                        <li><p>Career</p></li>
                    </ul>
                </div>

                <div class="row">
                    Copyright © 2022 Wambiekele Kiyeko Tallia-Anne
                </div>
                
            </div>
        </footer>
)
    
}

export default Footer