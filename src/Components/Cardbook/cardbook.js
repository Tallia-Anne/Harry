import './cardbook.css'
const CardBook = (props) => {
    
    
    return (
        <>
            <div className="book-card">
                
                
                <div className="book-catd__cover">
                    
                    <div className="book-card__book">
                        
                        <div className="book-card__book-front">
                            <img className="book-card__img" src={props.image} alt="img" />
                        </div>
                        <div className="book-card__book-back"></div>
                        <div className="book-card__book-side"></div>
                        
                    </div>
                    
                    
                </div>
                
                <div className="book-card__title">
                    <p> {props.name}</p>
                   
                </div>
                <div className="book-card__author">
                    J. K. Rowling
                </div>
                
                <div className="btn-row">
                <p className='btn-fnac' >Fnac</p>
                    <p className='btn-amazon' >Amazon</p>
                </div>
            </div>
        </>
)
    
}

export default CardBook