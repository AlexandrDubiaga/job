import React from 'react';


const Ingredients = ({ name, amount, measurement }) => {
    return (
        <div>
            <ul className="ingredients">
                <div>
                    <div>{name} - {amount} - {measurement}</div>
                </div>

            </ul>
        </div>
    )
}
export default Ingredients;







