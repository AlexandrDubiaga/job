import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navbar.module.css';
class Navbar extends React.Component{
    render(){
        return(
            <nav className={style.nav}>
                <div> <NavLink to="/">Home</NavLink></div>
                <div> <NavLink to="/profile">Profile</NavLink></div>
                <div> <NavLink to="/news">News</NavLink></div>
                <div> <NavLink to="/menu">Menu</NavLink></div>  
            </nav>
        )
    }
}

export default Navbar;