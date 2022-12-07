import NewPlaylist from '../components/NewPlaylist';

export default {
  title: 'Новый плейлист',
  component: NewPlaylist
};

const Template = args => <NewPlaylist {...args} />; //eslint-disable-line

export const CardAddingTemplate = Template.bind({});

CardAddingTemplate.args = {
};
