import React from 'react';

import './styles.scss';

import logoDeezer from './logoDeezer.png';

const LeftBar = () => (
  <div className="leftBar">
    <a href="www.deezer.fr">
      <img className="leftBar__logo" src={logoDeezer} alt="logo" />
    </a>
    <div className="leftBar__link">
      <ul className="link-list">
        <li className="link">
          <a href="#">Musique</a>
        </li>
        <li className="link">
          <a href="#">Shows</a>
        </li>
        <li className="link">
          <a href="#">Parcourir</a>
        </li>
        <li className="link">
          <a href="#">Favoris</a>
        </li>
      </ul>
    </div>
  </div>
);

export default LeftBar;
