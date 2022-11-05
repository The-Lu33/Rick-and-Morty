import "./App.css";
import RickyMorty from "./components/RickyMorty";

function App() {
  return (
    <div className="App">
      <RickyMorty />
    </div>
  );
}

export default App;

{
  /* <div> <input
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
{/* {console.log(residents.residents)} 
<h2>name:{ricky.name}</h2>
<h3>planeta: {ricky.type}</h3>
<h3>dimencion:{ricky.dimension}</h3>
<h3>cantidad de residentes: {ricky.residents?.length}</h3>
</div> */
}
