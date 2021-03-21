import React from 'react';
import {
  Icon, Image, Menu, Sidebar,
} from 'semantic-ui-react';

import logoDeezer from './logoDeezer.png';

const LeftBar = () => (
  <Sidebar.Pusher>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
    >
      <Image href="/" src={logoDeezer} size="small" />
      <Menu.Item as="a">
        <Icon name="music" />
        Music
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="microphone" />
        Shows
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="heart" />
        Favorites
      </Menu.Item>
    </Sidebar>
  </Sidebar.Pusher>
);

export default LeftBar;
