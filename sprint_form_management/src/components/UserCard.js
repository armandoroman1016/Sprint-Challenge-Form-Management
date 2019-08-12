import React from 'react';
import { Card } from 'semantic-ui-react'

const Cards = (props) => {

    const {recipeList} = props

    return (
        <div>
        {recipeList.map(recipe => {
            return (
                <Card key = {Date.now()} data-testid = 'card'>
                <Card.Content>
                    <Card.Header>{recipe.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Type : {recipe.course}</span>
                    </Card.Meta>
                    <Card.Description>
                        Ingredients : {recipe.ingredients}
                    </Card.Description>
                </Card.Content>
            </Card>
            )
        })}
        </div>
    )
}

export default Cards