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
    <div className="residents">
      <img src={residentes.image} alt="" />
            <h2>{residentes.name}</h2>
      <hr />
      <div className="information-residents">

      <span>species</span>
      <h2>{residentes.species}</h2>
      <span>Origin</span>
      <h2>{residentes.origin?.name}</h2>
      <span>Location</span>
      <h2>{residentes.location?.name}</h2>
      <span>Episode</span>
      <h2>{residentes.episode?.length}</h2>
      </div>
 
    </div>
  );
};

export default Characters;
