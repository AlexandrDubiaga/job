import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Menu from './Menu'
import data from '../../data.json'
class MenuContainer extends React.Component {
    constructor (props) {
        super(props);
      }
   
    render() {
        return (
            <div>
                <Menu recipes={data} title="Delicious Recipes" />
            </div>
        )
    }
}


export default compose(
    connect(null, null),
)(MenuContainer);