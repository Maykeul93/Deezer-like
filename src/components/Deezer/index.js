// == Import npm
import React, { useState } from 'react';
import api from 'src/api';

import Search from 'src/components/Search';
import LeftBar from 'src/components/LeftBar';
import Content from 'src/components/Content';
import Album from 'src/components/Album';
// == Import
import './styles.css';

import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
// == Composant
const Deezer = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    setLoading(true);
    api.get('/search', {
      params: {
        q: search,
      },
    })
      .then((response) => response.data)
      .then((responseData) => {
        console.log(responseData);
        setSearchResults(responseData.data);
      })
      .catch((errors) => {
        console.error(errors);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (

    <div className="deezer">
      <Router>
        <Switch>
          <Route exact path="/">
            <Search
              onSearch={handleSubmitSearch}
              inputSearchValue={search}
              onSearchChange={setSearch}
              onLoading={loading}
            />
            <LeftBar />
            <Content albums={searchResults} />
          </Route>
          <Route path="/album/:albumId">
            <Search
              onSearch={handleSubmitSearch}
              inputSearchValue={search}
              onSearchChange={setSearch}
              onLoading={loading}
            />
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
