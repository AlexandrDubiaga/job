import React from 'react';
import style from './header.module.css';
import { connect } from 'react-redux';
import {compose } from 'redux';
import {Redirect} from 'react-router-dom';
import {NavLink} from "react-router-dom";

class Header extends React.Component{
    
  
    render(){
        debugger
        return(
            <header className={style.header}>
            <div className={style.loginBlock}>
                {this.props.isAutorizzed?<div>Hi bro you are logining now</div>:<NavLink to={'/login'}><button>Login</button></NavLink>}
            </div>
            </header>
        )
    }
}

let mapToProps = (state) =>{
return{
    isAutorizzed:state.app.isAutoraized
}
}

export default compose(
    connect(mapToProps,null)
)(Header);


