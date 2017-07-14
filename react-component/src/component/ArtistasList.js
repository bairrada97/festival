		import React, { Component } from 'react';
		import PropTypes from 'prop-types';
		
			

		class ArtistasList extends Component {
			

			render(){
			  return(

			  		<ul className="artistas-container">
			            {
			              this.props.filtro.map((item, index) => {
			                  return  item.artistas.map((artista, indexArtista) => {
			                      return (
			                      	
			                        <li className="artistas">{artista.nome}<button className="artistas__button" onClick={this.props.clicked.bind(this, artista)} ></button></li>
			                      )
			                  })
			                
			              })
			            }
          			</ul>

		
			)}


		}

		export default ArtistasList;  