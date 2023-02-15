import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
	
	/*const cardComponent = robots.map((user, i) =>{
		return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
	})*/

	var cardComponent = [];
	robots.forEach((robot, i) =>{

		cardComponent.push(<Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>);
		return cardComponent;
	})

	return(
		<div>
			{cardComponent}      		
        </div> 
     )
}

export default CardList;