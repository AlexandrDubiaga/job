import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {compose } from 'redux'
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {getProfileDataThunk} from "../../redux/profileReducer";
import Preloader from '../../prg/preloader/preloader';
class ProfileContainer extends React.Component{
    componentDidMount(){
        this.props.getProfileDataThunk(this.props.profileId)
    }
    render(){
        return(
            <>
            <div>
            {!this.props.isFetching && <Preloader />}
                <Profile {...this.props} />
            </div>
            </>
        )
    }
}
let mapStateToProps = state=>{
    return {
        profileId: state.app.idAuthUser,
        languages: state.profileData.languages,
        city: state.profileData.city,
        social: state.profileData.social,
        isFetching:state.profileData.isFetching
    }
}

export default compose(
    connect(mapStateToProps,{getProfileDataThunk}),
    WithAuthRedirect
    )(ProfileContainer);