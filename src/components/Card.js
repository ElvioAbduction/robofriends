import React from 'react';
import './Card.css';

const Card = (props) => {
	return(
		<div id='card' className='tc bg-light-green dib br3 pa3 ma2 grow pw2 shadow-5'>
			<img alt='robot' src={`https://robohash.org/${props.id}?200x200`} />
			<div>
				<h2>{props.name} </h2>
				<p> {props.email}</p>
			</div>
		</div>		

		);
}

export default Card;