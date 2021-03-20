// == Import npm
import React from 'react';
import Search from 'src/components/Search';
import LeftBar from 'src/components/LeftBar';
import Content from 'src/components/Content';
// == Import
import './styles.css';

import albumsData from 'src/data/data.json';
// == Composant
const Deezer = () => (
  <div className="deezer">
    <Search />
    <LeftBar />
    <Content albums={albumsData.data} />
  </div>
);

// == Export
export default Deezer;
