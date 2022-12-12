import React from 'react';

import CardStack from '../components/CardStack';

export default {
  title: 'Стек карт',
  component: CardStack,
  argTypes: {
    numberOfCards: { type: 'number', defaultValue: 4 }
  }
};

function Template(args) {
  return <CardStack {...args} />;
}

export const CardStackTemplate = Template.bind({});

CardStackTemplate.args = {
  firstCardIndex: '0',
  fourthCardIndex: 4
};
