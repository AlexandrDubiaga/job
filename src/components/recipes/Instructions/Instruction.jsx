import React from 'react';


const Instruction = props => {
    return (
        <div>
            <section className="instructions">
                <h2>Cooking Instructions</h2>
                <ul className="instruction">
                    <div>
                        {props.steps.map((st, i) => <div key={i}>{st}</div>)}
                    </div>

                </ul>
            </section>
        </div>
    )
}
export default Instruction;







