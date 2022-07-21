import React from "react";
import { hot } from 'react-hot-loader/root';
import Search from './Search.jsx'


class App extends React.Component {
  render() {
    return (
      <>
      <h1>
      Welcome to Keenan's Pokedex
    </h1>
    <Search />
      </>
    );
  }
}

export default hot(App);