import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'pending',
      name: 'pending',
      type: 'pending',
      pokeSearch: 'pending',
      weight: 'pending',
      height: 'pending'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({pokeSearch: event.target.value.toLowerCase()});
  }

  handleSubmit(event) {

    var requestedPokemon = new URLSearchParams();
    requestedPokemon.append('name', this.state.pokeSearch);

    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: requestedPokemon
    }

    fetch("http://localhost:3000/", requestOptions)
      .then((response) => {
        console.log(typeof response)
        return response.json()
      })
      .then((result) => {

          if(result.id < 10) {
            this.setState({id: '00' + result.id.toString()})
          } else if (result.id < 100) {
            this.setState({id: "0" + result.id.toString()})
          } else {
            this.setState({id: result.id})
          }

          this.setState({
            name: result.name,
            type: result.types[0].type.name,
            height: result.height,
            weight: result.weight
          });

        },
        (error) => {
          console.log('There was an error')
          this.setState({
            id: '',
            name: 'Pokemon Not Found, please check name'
          });
        }
      )
    event.preventDefault();
  }


  render() {
    const { error, id, name } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
       <>
     <div>
     <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter Pokemon Name" onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
      <h2>{this.state.name[0].toUpperCase() + this.state.name.slice(1)}</h2>
      <p>Pokemon # {this.state.id}</p>
       <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + this.state.id + ".png"} width="320" alt=""></img>
       <div>
       <p>{'Type: ' + this.state.type[0].toUpperCase() + this.state.type.slice(1)}</p>
       <p>Height: {this.state.height * 0.10}m</p>
       <p>Weight: {this.state.weight * 0.10}kgs</p>
       </div>
     </div>
   </>
      );
    }
  }
}
