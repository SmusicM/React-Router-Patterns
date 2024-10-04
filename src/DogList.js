import React from "react";
import {Link} from "react-router-dom"
function DogList({dogs}){

    return(
        <div>
            <h2>Dog List, pick a link!</h2>
            <ul>
               {dogs.map(dog=>(
                <li> <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link> </li>
               ))}
            </ul>
        </div>
    )
}
export default DogList;