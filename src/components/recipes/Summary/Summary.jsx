import React, { PropTypes } from 'react';

export const Commpon = props => {
    return (
        <div>
            {props.ingredients.map(
                (ing, i) => <div>
                    <div><span>{ing.name}</span> - <span>{ing.amount}</span>  - <span>{ing.measurement}</span> </div>
                </div>
            )}
        </div>
    )
}


class Summary extends React.Component {
    render() {
        return (
            <div className="summary">
                {this.props.title}
                {this.props.data.map(
                    (objects, i) => <div>
                        <div key={i}> <Commpon {...objects} /> </div>
                    </div>
                )}
            </div>
        )
    }
}



export default Summary;