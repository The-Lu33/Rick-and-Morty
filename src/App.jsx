import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Characters from './components/Characters';

function App() {
  const [ricky, setRicky] = useState({});
  const [typeId, setTypyid] = useState("");
  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setRicky(res.data))
  }, [])
  console.log(ricky);
  const searchtype = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
      .then(res => setRicky(res.data));

  }
  return (
    <div className="App">
      hello
      <input type="text" value={typeId} onChange={e => setTypyid(e.target.value)} />
      <button onClick={searchtype}>SERCH</button>
      {ricky.residents?.map(residents => (
        <Characters url={ricky.residents}
          key={ricky.residents} />
      ))}
      <h2>
        {ricky.name}
      </h2>
      <h3>
        {ricky.type}
      </h3>
      <h3>
        {ricky.dimension}
      </h3>
      <h3>
        cantidad de residentes: {ricky.residents.length}

      </h3>


    </div>
  )
}

export default App
