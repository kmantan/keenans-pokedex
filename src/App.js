import React from "react";
import { hot } from 'react-hot-loader/root';
// import Search from './Search.js'


class App extends React.Component {
  render() {
    const { name, dexNum } = this.props;
    return (
      <>
        <h1>
          Welcome to Keenan's Pokedex
        </h1>
        <div className="entry">
          <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + dexNum + ".png"} width="240"></img>
          <p>Grass   Poison</p>
          <p>Height: 'height.goes.here'</p>
          <p>Weight: 'weight.goes.here'</p>
        </div>
        <form action='http://localhost:3000' type='GET'>
        <input name="pokemon" type="text" placeholder="Enter Pokemon Name"></input>
        <button type="submit">Find Pokemon</button>
        </form>
      </>
    );
  }
}

export default hot(App);