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
			
		}

		export default VideosList;  