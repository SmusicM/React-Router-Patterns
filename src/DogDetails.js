import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function DogDetails({dogs}) {
  //name from route parameter
  const navigate = useNavigate();
  const { name } = useParams();
  const [activeDog, setActiveDog] = useState(null);
  useEffect(() => {
    const findDog = dogs.find(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );
    setActiveDog(findDog);
  }, [name, dogs]);
if(!activeDog){
    return(<p>{name } not found</p>)
}
  return (
    <div className="DogList-cont">
      <p>{activeDog.name}</p>
      <p>{activeDog.age}</p>
      <img src={activeDog.src}></img>
      <p>Facts about {activeDog.name}</p>
      <ul>
        {activeDog.facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
export default DogDetails;
