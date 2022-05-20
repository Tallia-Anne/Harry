import './index.css'



const Cardsort = (props) => {
    
    return (
        <>
        <div className="card-sorts">
               
                <div className="card-content-sort">
                    
                    <p className='title'>{props.name}</p>  
                    <p>{props.text}</p>
            </div>
        </div>
        
        </>
)
}

export default Cardsort