import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import VideosList from './component/VideosList';
import ArtistasList from './component/ArtistasList';

import festivais from './config/dados';

class App extends Component {

  constructor (props) {
    super(props)

    this.festivais = festivais

    this.state = {
      titulo: 'Music Player',
      filtro: this.festivais.slice(),
      searchText: "",
    } 
  }

  handleChange(evt) {
    
    let res = this.festivais.map(festival => {
      return {
        festival: festival.festival,
        artistas: festival.artistas.filter(artista => {
          return artista.nome.toLowerCase().indexOf(evt.target.value.toLowerCase()) === 0
          
        }) 
      }
    })

    
    this.setState({
      filtro: res,
      artistaSelecionado: null,
      searchText: evt.target.value,

    })
    console.log(res)
    
  }

  handleSelectArtist (artista, evt) {
    this.setState({
      artistaSelecionado: artista
    })
    console.log(artista)
  }


  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h1> {this.state.titulo} </h1>
          <form>
            <input className="search" type="text" placeholder="Search" onChange={this.handleChange.bind(this)} />
          </form>
        </div>
        <div className="music-container">
          {
            this.state.artistaSelecionado
            ? <VideosList 
              videoList = {this.state.artistaSelecionado.videos} 
            />
            : this.state.searchText !== ""
              ? <ArtistasList
                clicked = {this.handleSelectArtist.bind(this)}
                filtro = {this.state.filtro}
                />
              : null
          }
        </div>
      </div>
    );
  }
}

export default App;
