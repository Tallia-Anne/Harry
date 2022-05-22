
import Personnage from "../../Personnage";
import axios from "axios";
import { useState, useEffect } from "react";





const Slytherin = () => {

    const [data, setData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {

            const response = await axios.get("https://hp-api.herokuapp.com/api/characters");
            console.log("response.data", response.data);

            const modifiedData = response.data.filter((el) => {
                return el.house.includes("Slytherin");

            });
            console.log("toto:", modifiedData);
            setData(modifiedData);
        };

        fetchData()

    }, [])

    return (
        <div className='charactère'>

            {/* recuperer les donnée dans le composant */}


            {data !== null ? <Personnage data={data} /> : null}




        </div>
    )
}

export default Slytherin