import React, { Component } from "react";
import logo from '../assets/logo.svg';
import '../styles/nav.css';

var link = "https://agustinmanelli.github.io/Portfolio";

class Nav extends Component{
    render(){
        return(
            <div className = "nav">
                <a href = "#Home" className = "nav__img"><img src = {logo} alt="navegation logo react"></img></a>
                <ul className = "nav__ul">
                    <a href = "#Home"><li className = "nav__li">Home</li></a>
                    <a href = ""><li className = "nav__li">Sobre Mi</li></a>
                    <a href = ""><li className = "nav__li">Proyectos</li></a>
                </ul>
            </div>
        )
    }
}

export default Nav;