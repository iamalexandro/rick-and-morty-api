import React, { Component } from "react";
import logo from "./images/rickMorty.jpeg";
import CharacterCard from "./components/CharacterCard";
import Loader from "./components/Loader";
import "./App.scss";

class App extends Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      results: [],
    },
  };
  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
        nextPage: this.state.nextPage + 1,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    return (
      <div className="layout">
        <img src={logo} className="appLogo" alt="logo" />
        <h1>Characters</h1>
        <ul className="characters">
          {this.state.data.results.map((character) => (
            <CharacterCard
              character={character}
              key={character.id}
            ></CharacterCard>
          ))}
        </ul>

        {this.state.loading && (
          <div className="loader">
            <Loader />
          </div>
        )}

        {!this.state.loading && (
          <button className="showMore" onClick={() => this.fetchCharacters()}>
            Load More
          </button>
        )}
      </div>
    );
  }
}

export default App;
