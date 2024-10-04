import React from "react";
import {Link} from "react-router-dom"
function Nav({dogs}){
    <div className="Nav-cont">
      <ul>
        {dogs.map(dog=>{
         <li> <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link> </li>
        })}
     </ul>
    </div>
   
}
export default Nav;