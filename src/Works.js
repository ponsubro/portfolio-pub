import React, { Component } from 'react';
import './Works.css';
import { NavLink, Link } from 'react-router-dom'

import book from './img/book.png';
import pawwow from './img/pawwow.png';
import tootie from './img/tbanner.png';
import portfolio from './img/toppage.png';

class Works extends Component {
  componentDidMount() {
    document.getElementById("content").style.marginBottom = '-101px';
  }

  render() {
    return (
      <React.Fragment>
        <div className="area">
          <div className="textPadding">
            <h1>Works</h1>
          </div>
          <div className="bannerContainer">
            <div className="banner">
              <Link to='/works/work04'>
                <img src={portfolio} />
              </Link>
            </div>
            <div className="banner">
              <Link to='/works/work03'>
                <img src={tootie} />
              </Link>
            </div>
            <div className="banner">
              <Link to='/works/work02'>
                <img src={pawwow} />
              </Link>
            </div>
            <div className="banner">
              <Link to='/works/work01'>
                <img src={book} />
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Works;