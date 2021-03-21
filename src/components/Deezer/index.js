// == Import npm
import React, { useState } from 'react';
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
const Deezer = () => {
  const [search, setSearch] = useState('eminem');

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    alert(`sumbit done: ${search}`);
  };

  return (

    <div className="deezer">
      <Router>
        <Switch>
          <Route exact path="/">
            <Search onSearch={handleSubmitSearch} inputSearchValue={search} />
            <LeftBar />
            <Content albums={albumsData.data} />
          </Route>
          <Route path="/album/:albumId">
            <Search onSearch={handleSubmitSearch} inputSearchValue={search} />
            <LeftBar />
            <Album />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

// == Export
export default Deezer;
