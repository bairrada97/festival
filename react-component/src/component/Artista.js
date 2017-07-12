import React, { Component } from 'react';
	

class Artista extends Component {
	

	render(){
			
		return (
			<div>
				<li>
                	<button onClick = {this.handleSelect.bind(this)}>Select</button>
                	<form>
                		<input type="checkbox" checked={this.props.checked} onClick= {this.handleCheckClick.bind(this)} />

                	</form>
                </li>
            </div>
		)
	}


}



export default Fruta;  