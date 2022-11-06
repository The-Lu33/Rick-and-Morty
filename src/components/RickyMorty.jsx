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
  // detecta el evento enter y ejecuta la funcion searchtype
  const handelChange = (e) => {
    if (e.key === "Enter") {
      searchtype();
    }
  };

  return (
    <div>
      <div className="header">
        <div className="image-container">
          <img className="" src="image/banner.png" alt="" />
        </div>
        <div className="search">
          <input
            type="text"
            value={typeId}
            placeholder="Type ID"
            onChange={(e) => setTypyid(e.target.value)}
            onKeyPress={handelChange}
          />
          <div className="search-input-button">

          <button onDragEnterCapture={searchtype} onClick={searchtype}>
            <img src="./image/bx-search.svg" alt="" />
          </button>
          </div>
        </div>
      </div>
      <section className="information">
        <div className="item1">
          <h2>Name:</h2>
          <span>{ricky.name}</span>
        </div>
        <div className="item2">
          <h2>Type:</h2>
          <span>{ricky.type}</span>
        </div>
        <div className="item3">
          <h2>Dimesion:</h2>
         <span>
          {ricky.dimension}
          </span>
        </div >
        <div className="item4">
          <h2>Poblation:</h2>
          <span>{ricky.residents?.length}</span>
        </div>
      </section>

      <div className="container-residents">
        {ricky.residents?.map((residents) => (
          // console.log(residents)

          <Characters key={residents} url={residents} />
        ))}
      </div>
    </div>
  );
};

export default RickyMorty;
