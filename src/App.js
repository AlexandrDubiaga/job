import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeContainer from './components/home/HomeContainer';
import ProfileContainer from './components/profile/ProfileContainer';

import LoginContainer from './components/login/LoginContainer';
import NewsContainer from './components/news/NewsContainer';
import Header from './components/header/Header';
import Navbar from './components/Navbar/Navbar';
import style from './App.module.css';
import { connect } from 'react-redux';
import {compose } from 'redux'
import { withRouter } from "react-router";
import { loginMeThunk } from './redux/appReducer';



class  App extends React.Component{
    componentDidMount(){

    }
  render(){
    return (
      <div className={style.appAllWrapper}>
        <Header />
        <Navbar />
        <div className={style.appContent}>
        <Route path="/" render={()=><HomeContainer />} />
          <Route path="/profile" render={()=><ProfileContainer />} />
          <Route path="/login" render={()=><LoginContainer />} />
          <Route path="/news" render={()=><NewsContainer />} />
         
        </div>
      </div>
    );
  }
  
}

let mapStateToProps  = (state)=>{
  return{
    autorized:state.app.isAutoraized
  }
}

export default compose(
  connect(mapStateToProps,{loginMeThunk}),
  withRouter
  )(App);
