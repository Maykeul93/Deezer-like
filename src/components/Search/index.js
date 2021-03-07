import React from 'react';

import './styles.scss';

const Search = () => (
  <div className="search">
    <form className="search__form">
      <ion-icon name="search-sharp" />
      <input className="search__input" type="text" placeholder="Rechercher" />
    </form>
  </div>
);

export default Search;
