		import React, { Component } from 'react';
		import PropTypes from 'prop-types';
		
		import Video from './Video';	

		class VideosList extends Component {
			

			render(){
			  return(

			  	<div className="video-container">
			        {
			          this.props.videoList.map((video, index) => {
			              return( <Video key={"chave" + index}
			                	video = {video.url}
			                    musica = {video.musica}
			                    onFavorite = {() => this.props.onFavorite && this.props.onFavorite(video)}
			                    isFavorito = {this.props.favoritos.indexOf(video.url) !== -1}
			                      />
			                      
			                )
			          })

			        }
			        
			     </div>
			  	)   	
			    


		}
	}	

		VideosList.propTypes = {
			videoList: PropTypes.array.isRequired,
			onFavorite: PropTypes.func.isRequired
			
		}

		export default VideosList;  