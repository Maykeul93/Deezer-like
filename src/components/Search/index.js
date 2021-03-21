import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import { Form, Input } from 'semantic-ui-react';

const Search = ({
  onSearch, onSearchChange, inputSearchValue, onLoading,
}) => (
  <Form onSubmit={onSearch}>
    <Input
      icon="search"
      iconPosition="left"
      fluid
      loading={onLoading}
      type="text"
      placeholder="Rechercher un artiste, une musique ou un album"
      onChange={(event) => onSearchChange(event.target.value)}
      value={inputSearchValue}
    />
  </Form>
);

Search.propTypes = {
  onSearch: PropTypes.func,
  onSearchChange: PropTypes.func,
  inputSearchValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onLoading: PropTypes.bool,
};

Search.defaultProps = {
  onSearch: () => {},
  onSearchChange: () => {},
  inputSearchValue: '',
  onLoading: false,
};
export default Search;
