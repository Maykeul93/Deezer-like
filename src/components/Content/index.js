import React from 'react';
import { Card as SementicCard } from 'semantic-ui-react';
import './styles.scss';

import Card from './Card';

const Content = () => (
  <div className="content">
    <h1>Pour vous</h1>
    <SementicCard.Group itemsPerRow={4}>
      <Card />
    </SementicCard.Group>

  </div>
);

export default Content;
