import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Search = ({ onSearch, onSearchChange, inputSearchValue }) => (
  <div className="search">
    <form className="search__form" onSubmit={onSearch}>
      <ion-icon name="search-sharp" />
      <input
        className="search__input"
        type="text"
        placeholder="Rechercher"
        onChange={onSearchChange}
        value={inputSearchValue}
      />
    </form>
  </div>
);

Search.propTypes = {
  onSearch: PropTypes.func,
  onSearchChange: PropTypes.func,
  inputSearchValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Search.defaultProps = {
  onSearch: () => {},
  onSearchChange: () => {},
  inputSearchValue: '',
};
export default Search;
