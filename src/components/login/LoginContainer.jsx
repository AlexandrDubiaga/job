import React from 'react';
import { connect } from 'react-redux';
import {compose } from 'redux';
import LoginForm from './AddLoginForm/AddLoginForm';
import {loginMeThunk,toogleIsFetching} from '../../redux/appReducer';
import { Redirect } from 'react-router';


class LoginContainer extends React.Component{
    login = (formData)=>{
        this.props.toogleIsFetching(true);
            this.props.loginMeThunk(formData);
    }

    render(){
        if(this.props.autorized){
            return <Redirect to={"/profile"} />
        }
        return(
            <div>
                <LoginForm onSubmit={this.login} {...this.props} />
            </div>
        )
    }
}
let mapStateToProps =(state)=>{
    return{
        autorized:state.app.isAutoraized,
        toogleFetching:state.app.toogleFetching
       
    }
}

export default compose(
    connect(mapStateToProps,{loginMeThunk,toogleIsFetching})
    )(LoginContainer);