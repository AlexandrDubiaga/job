import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Menu from './Menu'
import data from '../../storage/data-recipes.json';
import dataSummary from '../../storage/data-summary.json';
import Summary from './Summary/Summary';

class MenuContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <Menu recipes={data} title="Delicious Recipes" />
                </div>
                <div>
                    <Summary data = {dataSummary} title={"Main title for MY PROJECT"} />
                </div>
            </div>
        )
    }
}


export default compose(
    connect(null, null),
)(MenuContainer);