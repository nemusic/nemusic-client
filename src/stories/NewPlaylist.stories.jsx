import React from 'react';

import NewPlaylist from '../components/NewPlaylist/NewPlaylist';

export default {
  title: 'Новый плейлист',
  component: NewPlaylist
};

const Template = (args) => <NewPlaylist {...args} />; // eslint-disable-line

export const CardAddingTemplate = Template.bind({});

CardAddingTemplate.args = {
};
