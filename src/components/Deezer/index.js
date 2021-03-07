// == Import npm
import React from 'react';
import Search from 'src/components/Search';
import LeftBar from 'src/components/LeftBar';
import Content from 'src/components/Content';
// == Import
import './styles.css';

// == Composant
const Deezer = () => (
  <div className="deezer">
    <Search />
    <LeftBar />
    <Content />
  </div>
);

// == Export
export default Deezer;
