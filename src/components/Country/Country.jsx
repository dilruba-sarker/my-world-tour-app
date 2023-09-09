import { useState } from "react";
import "./Country.css";

const Country = ({ country,handleVisitedCountry}) => {
  console.log(country);

  const { name, continents, capital, flags, area, cca3 } = country;
  const[visited,setVisited]=useState(false)
  const handleVisited=()=>{
    setVisited(!visited)
  }
  console.log(handleVisitedCountry);
  return (
<div className={`country ${visited?'visited':'visited2'}`}>
{/* <div className={`country ${visited && 'visited'}`}> */}
      <h3 style={{color:visited?"red":"blue"}}>Name:{name.common}</h3>
      <h4>Capital:{capital}</h4>
      <h6>area:{area}</h6>
      <h6>cca3:{cca3}</h6>
      <h5>continents:{continents}</h5>
      <img src={flags.png} alt="" />
      <button>Marked Visited</button> <br />
      <button onClick={handleVisited}>{visited?"visited":"Going"}</button>
      {visited? "i have visited" : "i dont "}
    </div>
  );
};

export default Country;
