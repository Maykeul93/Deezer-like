import React from 'react';
import Proptypes from 'prop-types';
import { Card as SementicCard, Image } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

const Card = ({
  id,
  cover_medium: coverMedium,
  artist: {
    name,
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
  cover_medium: Proptypes.string,
  artist: Proptypes.shape({
    name: Proptypes.string,
  }),
  title: Proptypes.string,
};

Card.defaultProps = {
  cover_medium: '',
  artist: {},
  title: '',
};
export default Card;
