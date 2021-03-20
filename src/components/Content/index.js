import React from 'react';
import PropTypes from 'prop-types';
import { Card as SementicCard } from 'semantic-ui-react';
import './styles.scss';

import Card from './Card';

const Content = ({ albums }) => (
  <div className="content">
    <SementicCard.Group itemsPerRow={4}>
      {
      albums.map((album) => (
        <Card key={album.id.toString()} {...album} />
      ))
    }
    </SementicCard.Group>

  </div>
);

Content.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Content.defaultProps = {
  albums: [],
};
export default Content;
