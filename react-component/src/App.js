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
      favoritos: localStorage.getItem('myFavorites') ? JSON.parse(localStorage.getItem('myFavorites')) : []
    } 
    console.log(JSON.parse(localStorage.getItem('myFavorites')))
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

  handleFavorite (video) {
    let videoFavIndex = this.state.favoritos.indexOf(video.url)
    let newFavoritos = this.state.favoritos.slice()
    if(videoFavIndex === -1) {
      newFavoritos.push(video.url)
    }
    else {
      newFavoritos.splice(videoFavIndex, 1)
    } 
    this.setState ({
      favoritos: newFavoritos
    })
    localStorage.setItem('myFavorites', JSON.stringify(newFavoritos));
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h1> {this.state.titulo} </h1>
          <form>
            <input className="search-music" type="text" placeholder="Search" onChange={this.handleChange.bind(this)} />
          </form>
        </div>
        <div className="music-container">
          {
            this.state.artistaSelecionado
            ? <VideosList 
              videoList = {this.state.artistaSelecionado.videos} 
              onFavorite = {this.handleFavorite.bind(this)}
              favoritos = {this.state.favoritos}
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
