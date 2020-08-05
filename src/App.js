import React from "react";
import "./App.css";
import CharacterList from "./Components/Character-List";

class App extends React.Component {
  state = { characterList: [] };

  componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          characterList: res.results,
        })
      );
  }

  render() {
    const { characterList } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <CharacterList list={characterList} />
        </header>
      </div>
    );
  }
}

export default App;
