import "./App.css";
import CharacterCard from "./components/CharacterCard";
import data from "./assets/data.json";

function App() {
  const characterMap = data.map(index => {
    return <li key={index.id}><CharacterCard
      name={index.name}
      status={index.status}
      species={index.species}
      image={index.image}
      location={index.location.name}
      /></li>;
  });

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <h2>Your code here</h2>

      <div className="container">
        <ul>
          {characterMap}
        </ul>
      </div>
    </div>
  );
}

export default App;
