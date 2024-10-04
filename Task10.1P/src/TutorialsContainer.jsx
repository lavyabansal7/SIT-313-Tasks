import React from 'react'
import {Card} from 'semantic-ui-react'
import tutorials from './tutorials';
import Tutorial from './Tutorial';

function TutorialsContainer(){
    const tutorialList = tutorials.map((tutorial, index) =>
        <Tutorial key={index}
        img = {tutorial.img}
        name = {tutorial.name} 
        description = {tutorial.description}
        rating = {tutorial.rating}
        author = {tutorial.author}
        />
    );

    return (

        <Card.Group className='centered'>

            {tutorialList}

        </Card.Group>
    
    )
   
}
export default TutorialsContainer

