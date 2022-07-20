import React from "react";
import { hot } from 'react-hot-loader/root';
import Search from './Search.jsx'


class App extends React.Component {
  render() {
    const number = '001';
    return (
      <>
      <h1>
      Welcome to Keenan's Pokedex
    </h1>
    <Search dexNum={number}/>
      </>
    );
  }
}

export default hot(App);