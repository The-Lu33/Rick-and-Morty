import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Characters from "./Characters";

const RickyMorty = () => {
  // llamar la api de rick and morty con axios
  // guardar los datos en un estado
  // mostrar los datos en el componente
  const [ricky, setRicky] = useState([]);
  const [typeId, setTypyid] = useState("");

  useEffect(() => {
    // valor random para que se muestre un personaje al azar
    const randomId = Math.floor(Math.random() * 126) + 1;

    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => setRicky(res.data));
  }, []);

  // console.log(ricky.residents[0]);
  const searchtype = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${typeId}`)
      .then((res) => setRicky(res.data));
  };

  // detectar keyup en el input
  // llamar a la api con el valor del input
  // guardar el valor del input en un estado


  return (
    <div>
      <input
        type="text"
        value={typeId}
        placeholder="type id"
        onChange={(e) => setTypyid(e.target.value)}
      />
      <button onClick={searchtype}>Search</button>
      <h2>name:{ricky.name}</h2>
      <h3>planeta: {ricky.type}</h3>
      <h3>dimencion:{ricky.dimension}</h3>
      <h3>cantidad de residentes: {ricky.residents?.length}</h3>
       
      <ul>
        {ricky.residents?.map((residents)=>(
          // console.log(resident)  
       
          <Characters key={residents} url={residents}/>
         
          ))}
          </ul>
       


    </div>

  );
};

export default RickyMorty;
