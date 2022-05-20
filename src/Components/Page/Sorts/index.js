import Cardsort from "../../Cardsort"

import './index.css';

import sorts from '../../assets/sort';


const Sort  = () => {
    
    return (
        <div className="containercardsort">

            {
                sorts.map((sort) => {
                    return (
                        <Cardsort name={sort.name} text={sort.text} />
)
                })
            }
           

        </div>
)
    
}

export default Sort