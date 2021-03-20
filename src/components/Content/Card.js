import React from 'react';
import Proptypes from 'prop-types';

import { Card as SementicCard, Image } from 'semantic-ui-react';

const Card = ({
  cover,
  artist: {
    name,
  },
  title,
}) => (
  <SementicCard color="red">
    <Image src={cover} wrapped ui={false} />
    <SementicCard.Content>
      <SementicCard.Header>{name}</SementicCard.Header>
      <SementicCard.Meta>
        <span className="album">{title}</span>
      </SementicCard.Meta>
    </SementicCard.Content>
  </SementicCard>
);

Card.propTypes = {
  cover: Proptypes.string,
  artist: Proptypes.shape({
    name: Proptypes.string,
  }),
  title: Proptypes.string,
};

Card.defaultProps = {
  cover: '',
  artist: {},
  title: '',
};
export default Card;
