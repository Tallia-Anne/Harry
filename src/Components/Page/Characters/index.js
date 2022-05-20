import Heroperson from "../../Heroperson";
import Personnage from "../../Personnage";
import axios from "axios";
import { useState, useEffect } from "react";





const Characters = () => {

    const [data, setData] = useState(null);
    const [search, setSearch] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://hp-api.herokuapp.com/api/characters");
            console.log("response.data", response.data);
            const modifiedData = response.data.splice(0, 10).filter((el) => {
                return el.name.includes(search);
            });
            setData(modifiedData);
        };
        
        fetchData()
        
    }, [search] )
    
    return (
        <div className='charactère'>
            <Heroperson />
            {/* recuperer les donnée dans le composant */}
            <input
                type="text"
                value={search}
                onChange={(event) => {
                    setSearch(event.target.value);
                }}
            />
            
            {data !== null ? <Personnage data={data} /> : null}
            
            
           
            
        </div>
    )
}

export default Characters