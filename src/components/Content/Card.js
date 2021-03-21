import React from 'react';
import Proptypes from 'prop-types';
import { Card as SementicCard, Image } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

const Card = ({
  id,
  artist: {
    name,
  },
  album: {
    cover_medium: coverMedium,
  },
  title,
}) => {
  const { albumId } = useParams();
  return (
    <SementicCard color="red">
      <Image as="a" href={`/album/${Number(id)}`} src={coverMedium} wrapped ui={false} />
      <SementicCard.Content>
        <SementicCard.Header>{name}</SementicCard.Header>
        <SementicCard.Meta>
          <span className="album">{title}</span>
        </SementicCard.Meta>
      </SementicCard.Content>
    </SementicCard>
  );
};

Card.propTypes = {
  id: Proptypes.oneOfType([
    Proptypes.string,
    Proptypes.number,
  ]).isRequired,
  artist: Proptypes.shape({
    name: Proptypes.string,
  }),
  album: Proptypes.shape({
    cover_medium: Proptypes.string,
  }),
  title: Proptypes.string,
};

Card.defaultProps = {
  artist: {},
  album: {},
  title: '',
};
export default Card;
