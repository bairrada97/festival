	import React, { Component } from 'react';
	import PropTypes from 'prop-types';
		
import * as FontAwesome from 'react-icons/lib/fa'

const Video = (props) => (

	<div className="video-list">
	  <div> 
	  	{props.artista ? <h3 className="artista-copy">{props.artista}</h3> : null}
	  	<h2 className="musica-copy">{props.musica}</h2>
	  	<span className="favoritos"><a onClick={() => props.onFavorite && props.onFavorite()}>{props.isFavorito ? <FontAwesome.FaHeart /> : <FontAwesome.FaHeartO />} </a></span>
	  </div>
	 
	  <iframe width="196" height="110" src={props.video} frameBorder="0" allowFullScreen></iframe>
	  
	</div>
)

Video.propTypes = {
	artista: PropTypes.string,
	video: PropTypes.string.isRequired,
	musica: PropTypes.string.isRequired,
	onFavorite: PropTypes.func.isRequired
}

export default Video;  