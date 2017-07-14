	import React, { Component } from 'react';
	import PropTypes from 'prop-types';
		

const Video = (props) => (
	<div className="video">
	  <iframe width="196" height="110" src={props.video} frameBorder="0" allowFullScreen></iframe>
	  <h2 className="musica">{props.musica}</h2>
	</div>
)

Video.propTypes = {
	video: PropTypes.string.isRequired,
	musica: PropTypes.string.isRequired,
}

export default Video;  