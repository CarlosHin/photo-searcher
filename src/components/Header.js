import React from 'react';
import '../assets/styles/Header.css';

const Header = props => {

  return (
    <header className="header">
    <a href="/">
      <i className="fa fa-area-chart" ></i>
      Photo Searcher
      <span>-Powered by Unplash</span>
    </a>

    </header>
  )
};
export default Header;
