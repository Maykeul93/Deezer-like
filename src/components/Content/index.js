import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './styles.scss';

const Content = () => (
  <div className="content">
    <Card color="red">
      <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
);

export default Content;
