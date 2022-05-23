import Cardperson from '../Cardperson';



import './charc.css'
const Characte = (props) => {
   
    return (
        <div className='section-personnage' >
            <div className="CharactersContainer" >
          
            {
                props.data.map((person) => {
                    return (
                        <Cardperson person={person}  />
)
                })
                }
            </div>
        </div>
    );
};

export default Characte;