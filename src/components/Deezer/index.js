// == Import npm
import React from 'react';
import Search from 'src/components/Search';
import LeftBar from 'src/components/LeftBar';
import Content from 'src/components/Content';
import Album from 'src/components/Album';
// == Import
import './styles.css';

import albumsData from 'src/data/data.json';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
// == Composant
const Deezer = () => (

  <div className="deezer">
    <Router>
      <Switch>
        <Route exact path="/">
          <Search />
          <LeftBar />
          <Content albums={albumsData.data} />
        </Route>
        <Route path="/album/:albumId">
          <Search />
          <LeftBar />
          <Album />
        </Route>
      </Switch>
    </Router>
  </div>
);

// == Export
export default Deezer;
