import React from 'react';
import Ingredients from './Ingredients'


const IngredientsList = props => {
    return (
        <div>
            <ul className="ingredients">
                {props.list.map(
                    (ing, i) => <li key={i}>{<Ingredients {...ing} />}</li>
                )}
            </ul>
        </div>
)
}
export default IngredientsList;










