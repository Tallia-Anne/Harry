import './book.css'
//card des book
import CardBook from '../../Cardbook/cardbook';
//les données des livres
 import books from '../../assets/livres'



const Book = () => {
    
    return (
        <div className="Book">
            <div className='book-container'>
            {
                books.map((book) => {
                    return (
                        <CardBook name={book.name} image={book.image} illustrateurs={book.illustrateurs}  autheur={book.autheur} />
)
                })
               
                }
            </div>
        </div>
)
    
    
}

export default Book