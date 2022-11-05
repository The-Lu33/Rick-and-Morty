import axios from "axios";
import React, { useEffect, useState } from "react";

const Characters = ({ url }) => {
  // console.log(url);
  const [residentes, setResidentes] = useState({});
  useEffect(() => {
    axios.get(url).then((res) => setResidentes(res.data));
  }, []);
  // console.log(residentes);

  return (

    <li>
      <h2>{residentes.name}</h2>
      <img src={residentes.image} alt="" />
    </li>
    
    )
  
}

export default Characters;
