import React from 'react';
import News from './News';
import { connect } from 'react-redux';
import {compose } from 'redux';
import  {getNewsThunk} from '../../redux/newsReducer'
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import Preloader from '../../prg/preloader/preloader';
class NewsContainer extends React.Component{
    componentDidMount(){
        this.props.getNewsThunk();
    }
    render(){ 
        return(
            <>
            {!this.props.isFetching && <Preloader />}
            <div>
                <News {...this.props} />
            </div>
            </>
        )
    }
}
let mapToProps=(state)=>{
return{
    news:state.newsData.news,
    isFetching:state.newsData.isFetching
}
}

export default compose(
    connect(mapToProps,{getNewsThunk}),
    )(NewsContainer);