import './index.css'
const SectionAbout = () => {

    return (
        <div className="containerintro">
            <div className='intro-text'>
                <div className="quare"></div>
               
                <div className="sec-services">
                    <h2>A propos</h2>
                    <div className="services">
                        <div className="single-service">
                            <div className="service-icon">
                                <i></i>
                            </div>
                            <h4>Les personnages</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="single-service">
                            <div className="service-icon">
                                <i></i>
                            </div>
                            <h4>Les maisons</h4>
                            <p>Découvrir les maisons du chateau</p>
                        </div>
                        <div className="single-service">
                            <div className="service-icon">
                                <i></i>
                            </div>
                            <h4>Les animaux compagnie</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
       
            </div>
        </div>
    )
}

export default SectionAbout