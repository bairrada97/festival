import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props)

    this.festivais = [
        {
          festival: 'Vodafone Paredes de Coura 2017',
          artistas: [{
                      nome: 'Foals',
                      videos: 'https://www.youtube.com/embed/eYoINidnLRQ?list=PLgIOsBXGzlt0WmCtybqhrAVjZ8RHD0dqe'  
                    },
                    {
                      nome: 'At The Drive-In',
                      videos: 'https://www.youtube.com/watch?v=ce0LtolCsLc&list=PLBPQjtB4olU_f12tv70BclyOhVuBrrP1a'
                    },
                    {
                      nome: 'Beach House',
                      videos: 'https://www.youtube.com/watch?v=RBtlPT23PTM&list=PLjR7x6h301ozi5AiJ_l2tOZWHyAyGPzU_'
                    },
                    {
                      nome: 'Nick Murphy',
                      videos: 'https://www.youtube.com/watch?v=6vopR3ys8Kw&list=PLwOftTG6432aPzvYImpgET_ttoxqkstJ_'
                    },
                    {
                      nome: 'Future Islands',
                      videos: 'https://www.youtube.com/watch?v=-5Ae-LhMIG0&list=PL6_mL3l364WbUOEf4Luanr1_TKmKLe3u2'
                    },
                    {
                      nome: 'King Krules',
                      videos: 'https://www.youtube.com/watch?v=hRzlbh4or3c'
                    },
                    {
                      nome: 'Benjamin Clemetine',
                      videos: 'https://www.youtube.com/watch?v=6DU6lDPs-AQ&list=PL6j_DM-mU1BaerM0GWyCyxLtZ7sazgcvq'
                    },
                    {
                      nome: 'BADBADNOTGOOD',
                      videos: 'https://www.youtube.com/watch?v=2AJOqx6_UKQ&list=PLvLnTyQQ2AfZiHagiaU87XMKosC4W2YOb'
                    }]
          
        },

        {
          festival: 'Meo Sudoeste',
          artistas: [{
                      nome: 'Foals',
                      videos: 'https://www.youtube.com/watch?v=eYoINidnLRQ&list=PLgIOsBXGzlt0WmCtybqhrAVjZ8RHD0dqe'
                    },
                    {
                      nome: 'At The Drive-In',
                      videos: 'https://www.youtube.com/watch?v=ce0LtolCsLc&list=PLBPQjtB4olU_f12tv70BclyOhVuBrrP1a'
                    },
                    {
                      nome: 'Beach House',
                      videos: 'https://www.youtube.com/watch?v=RBtlPT23PTM&list=PLjR7x6h301ozi5AiJ_l2tOZWHyAyGPzU_'
                    },
                    {
                      nome: 'Nick Murphy',
                      videos: 'https://www.youtube.com/watch?v=6vopR3ys8Kw&list=PLwOftTG6432aPzvYImpgET_ttoxqkstJ_'
                    },
                    {
                      nome: 'Future Islands',
                      videos: 'https://www.youtube.com/watch?v=-5Ae-LhMIG0&list=PL6_mL3l364WbUOEf4Luanr1_TKmKLe3u2'
                    }]
        
          
        },

        {
          festival: 'NOS Alive 2017',
          artistas: [{
                      nome: 'Foals',
                      videos: 'https://www.youtube.com/watch?v=eYoINidnLRQ&list=PLgIOsBXGzlt0WmCtybqhrAVjZ8RHD0dqe'
                    },
                    {
                      nome: 'At The Drive-In',
                      videos: 'https://www.youtube.com/watch?v=ce0LtolCsLc&list=PLBPQjtB4olU_f12tv70BclyOhVuBrrP1a'
                    },
                    {
                      nome: 'Beach House',
                      videos: 'https://www.youtube.com/watch?v=RBtlPT23PTM&list=PLjR7x6h301ozi5AiJ_l2tOZWHyAyGPzU_'
                    },
                    {
                      nome: 'Nick Murphy',
                      videos: 'https://www.youtube.com/watch?v=6vopR3ys8Kw&list=PLwOftTG6432aPzvYImpgET_ttoxqkstJ_'
                    },
                    {
                      nome: 'Future Islands',
                      videos: 'https://www.youtube.com/watch?v=-5Ae-LhMIG0&list=PL6_mL3l364WbUOEf4Luanr1_TKmKLe3u2'
                    },
                    {
                      nome: 'King Krules',
                      videos: 'https://www.youtube.com/watch?v=hRzlbh4or3c'
                    }]
         
          
        }

      ]

    this.state = {
      titulo: 'Music Player',
      filtro: this.festivais.slice(),
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
      artistaSelecionado: null

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

    let musicContainer = null
    if(this.state.artistaSelecionado) {
      musicContainer = <div><iframe width="560" height="315" src={this.state.artistaSelecionado.videos} frameborder="0" allowfullscreen></iframe></div>
    }
    else {
      musicContainer = <ul>
            {
              this.state.filtro.map((item, index) => {
                  return  item.artistas.map((artista, indexArtista) => {
                      return (
                        <li>{artista.nome}<button onClick={this.handleSelectArtist.bind(this, artista)} ></button></li>
                      )
                  })
                
              })
            }
          </ul>
    }

    return (
      <div className="App">
        <div className="App-header">
          <h1> {this.state.titulo} </h1>
          <form>
            <input type="text" placeholder="Search" onChange={this.handleChange.bind(this)} />
          </form>
        </div>
        <div className="music-container">
          {musicContainer}
        </div>
      </div>
    );
  }
}

export default App;
