import React, { Component } from "react";
import logo from '../assets/logo.svg';
import '../styles/header.css';

var link = "https://agustinmanelli.github.io/Portfolio";

class Header extends Component{
    render(){

        return(
            <div className = "header__container" id = "Home" >
                <div className = "header__background"></div>
                <div className = "header__content">
                    <div className = "header__content__text">
                        <h1>React template</h1>
                        <p>Proyecto creado 100% con React a modo de aprendizaje sobre este lib por Agustin Manelli, {link}</p>
                        {/*<p>{Usuario.find}</p>*/}

                    </div>
                    <div className = "header__content__logo">
                        <img src={logo} alt="logo template"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
