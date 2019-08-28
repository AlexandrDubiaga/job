import React from 'react';
import { connect } from 'react-redux';
import {compose } from 'redux';
import Home from './Home';

class HomeContainer extends React.Component{
    componentDidMount(){
      
    }
    render(){ 
        return(
            <div>
                <Home {...this.props} />
            </div>
        )
    }
}

export default compose(
    connect(null,null),
    )(HomeContainer);