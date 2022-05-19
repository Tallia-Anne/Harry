import Cardperson from '../Cardperson';

import './charc.css'
const Characte = (props) => {
    return (
        <div className='section-personnage' >
            <div className="CharactersContainer" >
          
            {
                props.data.map((person) => {
                    return (
                        <Cardperson name={person.name} imageUrl={person.image} yearOfBirth={person.yearOfBirth} house={person.house}  />
)
                })
                }
            </div>
        </div>
    );
};

export default Characte;