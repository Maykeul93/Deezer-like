import React from 'react';
import { Card as SementicCard, Image } from 'semantic-ui-react';

const Card = () => (
  <SementicCard color="red">
    <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
    <SementicCard.Content>
      <SementicCard.Header>Matthew</SementicCard.Header>
      <SementicCard.Description>
        Matthew is a musician living in Nashville.
      </SementicCard.Description>
    </SementicCard.Content>
  </SementicCard>
);

export default Card;
