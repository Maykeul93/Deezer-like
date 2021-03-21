import React from 'react';
import PropTypes from 'prop-types';
import { Card as SemanticCard } from 'semantic-ui-react';
import './styles.scss';

import Card from './Card';

const Content = ({ albums }) => (
  <div className="container">
    <SemanticCard.Group
      itemsPerRow={4}
      stackable
      doubling
    >
      {
      albums.map((album) => (
        <Card key={album.id.toString()} {...album} />
      ))
    }
    </SemanticCard.Group>

  </div>
);

Content.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    }),
  ),
};

Content.defaultProps = {
  albums: [],
};
export default Content;
