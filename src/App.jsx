import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Characters from "./components/Characters";

function App() {
  const [ricky, setRicky] = useState([]);
  const [typeId, setTypyid] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => setRicky(res.data));
  }, []);
  const searchtype = () => {
    axios
    .get(`https://rickandmortyapi.com/api/location/${typeId}`)
    .then((res) => setRicky(res.data));
  };
  // console.log(ricky);
  return (
    <div className="App">
      <input
        type="text"
        value={typeId}
        placeholder="type id"
        onChange={(e) => setTypyid(e.target.value)}
      />
      <button onClick={searchtype}>SERCH</button>
      {ricky.residents?.map((residents) => (
       
        <Characters
          url={residents.residents}
          // key={ricky.residents}
        />
      ))}
    {/* {console.log(residents.residents)} */}
      <h2>name:{ricky.name}</h2>
      <h3>planeta: {ricky.type}</h3>
      <h3>dimencion:{ricky.dimension}</h3>
      <h3>cantidad de residentes: {ricky.residents?.length}</h3>
    </div>
  );
}

export default App;
