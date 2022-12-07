import CardWoMui from '../components/CardWoMui';

export default {
  title: 'Карточка плейлиста без помощи Mui',
  component: CardWoMui
};

function Template(args) {
  return <CardWoMui {...args} />; //eslint-disable-line
}

export const CardTemplateHappy = Template.bind({});
export const CardTemplateAnger = Template.bind({});
export const CardTemplateGay = Template.bind({});
export const CardTemplateWinter = Template.bind({});

CardTemplateHappy.args = {
  title: 'Веселье',
  description: '20 треков',
  cover: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8d6182b0-8625-4d21-ace9-c858bf7074b5/Rectangle_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221207T202145Z&X-Amz-Expires=86400&X-Amz-Signature=b56021ed9cf50000ab462e326d4cef3585e426e737257511e7344a654c13f10a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Rectangle%25201.png%22&x-id=GetObject'
};

CardTemplateAnger.args = {
  title: 'Гнев',
  description: 'приколы 18+ треков',
  cover: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a0d52527-0b8c-4571-8796-28e19b6be711/Rectangle_1_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221207T202229Z&X-Amz-Expires=86400&X-Amz-Signature=ea35148b88fc1c440e4f62197c4f611ef9f4907333be383c614723080652c64a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Rectangle%25201%2520%281%29.png%22&x-id=GetObject'
};

CardTemplateGay.args = {
  title: 'Гейская',
  description: '40 треков',
  cover: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5e263e38-12ed-40d5-aa20-0cb7bd1cf0b2/Rectangle_1_%282%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221207T202358Z&X-Amz-Expires=86400&X-Amz-Signature=213fc5991ee83b88566899ed3e3dc8cb1496a3737e61207788376b574d47b05a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Rectangle%25201%2520%282%29.png%22&x-id=GetObject'
};

CardTemplateWinter.args = {
  title: 'Зима',
  description: 'длится 20 минут',
  cover: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fca93b7f-a075-4060-a564-b4f61467f8be/Rectangle_1_%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221207T202419Z&X-Amz-Expires=86400&X-Amz-Signature=6ae28f2b8c30d7f2ffd38a49dd0d1a367da59ce04d8f6736930d50ce4385be81&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Rectangle%25201%2520%283%29.png%22&x-id=GetObject'
};
