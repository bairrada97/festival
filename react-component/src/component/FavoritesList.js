	import React, { Component } from 'react';
	import PropTypes from 'prop-types';
		
import * as FontAwesome from 'react-icons/lib/fa'

import Video from './Video'

const FavoritesList = (props) => (

	<div className="favorite-list">

			            {
			              props.musicas.map((item, index) => {
			                  return item.artistas.map((artista, indexArtista) => {
			                      return artista.videos.map((video, indexVideo) => (
				                      		props.favoritos.indexOf(video.url) !== -1
				                      		? <Video key={"chave" + index + "_" + indexArtista + "_" + indexVideo}
				                      			artista = {artista.nome}
							                	video = {video.url}
							                    musica = {video.musica}
							                    onFavorite = {() => props.onFavorite && props.onFavorite(video)}
							                    isFavorito = {true}
							                   />
						                   : null
			                      		))
			                      	}
			                      )
			                  })
			                
			              }
	  
	  
	</div>
)

FavoritesList.propTypes = {
	favoritos: PropTypes.array.isRequired,
	musicas: PropTypes.array.isRequired,
	
}

export default FavoritesList;  