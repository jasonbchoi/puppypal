import React, { Component } from 'react';
import './Img.css'

class Img extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	render() {
		console.log(this.state);
		
		return (
			<div>
				
				<img className='newImg' src={this.props.currentImg} />
				
				
				
			</div>
		);
	}
}

export default Img;
