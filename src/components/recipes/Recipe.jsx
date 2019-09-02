import React from 'react';
import IngredientsList from './Ingredients/IngredientsList';
import Instruction from './Instructions/Instruction';

const Recipe = ({ name, ingredients, steps }) => {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>

            <IngredientsList list={ingredients} />

            <Instruction steps={steps} />
        </section>
    )
}


export default Recipe;