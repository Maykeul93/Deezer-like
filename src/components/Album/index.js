import React from 'react';
import { List, ListHeader } from 'semantic-ui-react';

import fetchAlbumData from 'src/hooks/fetchAlbumData';

import './styles.scss';
import { useParams } from 'react-router-dom';

const Album = () => {
  const { albumId } = useParams();
  const {
    albumData,
  } = fetchAlbumData(`album/${albumId}`);
  console.log('albumData', albumData);
  return (
    <List divided relaxed>
      <List.Header as="h1">{albumData.title}</List.Header>
      <List.Item />
    </List>
  );
};

export default Album;
