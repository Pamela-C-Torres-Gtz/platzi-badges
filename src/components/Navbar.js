import React from 'react';
import logo from '../images/logo.svg';
import './styles/Navbar.css';

class Navbar extends React.Component {
    render () {
        return (
              <div className="Navbar">
                  <div className="container-fluid">
                  <a className="Navbar_brand" href="/">
                      <img className="Navbar_brand-logo" src={logo} alt="Logo"/>
                      <span className="font-weight-light">Platzi</span>
                      <span className="font-weight-bold">Conferencia</span>
                  </a>
              </div>
              </div>
        );
    }
}

export default Navbar;