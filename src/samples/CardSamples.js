const CardSamples = [
  {
    title: 'Веселье',
    description: '20 треков',
    cover: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8d6182b0-8625-4d21-ace9-c858bf7074b5/Rectangle_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221207T202145Z&X-Amz-Expires=86400&X-Amz-Signature=b56021ed9cf50000ab462e326d4cef3585e426e737257511e7344a654c13f10a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Rectangle%25201.png%22&x-id=GetObject'
  },
  {
    title: 'Гнев',
    description: 'приколы 18+ треков',
    cover: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a0d52527-0b8c-4571-8796-28e19b6be711/Rectangle_1_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221207T202229Z&X-Amz-Expires=86400&X-Amz-Signature=ea35148b88fc1c440e4f62197c4f611ef9f4907333be383c614723080652c64a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Rectangle%25201%2520%281%29.png%22&x-id=GetObject'
  },
  {
    title: 'Гейская',
    description: '40 треков',
    cover: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5e263e38-12ed-40d5-aa20-0cb7bd1cf0b2/Rectangle_1_%282%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221207T202358Z&X-Amz-Expires=86400&X-Amz-Signature=213fc5991ee83b88566899ed3e3dc8cb1496a3737e61207788376b574d47b05a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Rectangle%25201%2520%282%29.png%22&x-id=GetObject'
  },
  {
    title: 'Зима',
    description: 'длится 20 минут',
    cover: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fca93b7f-a075-4060-a564-b4f61467f8be/Rectangle_1_%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221207T202419Z&X-Amz-Expires=86400&X-Amz-Signature=6ae28f2b8c30d7f2ffd38a49dd0d1a367da59ce04d8f6736930d50ce4385be81&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Rectangle%25201%2520%283%29.png%22&x-id=GetObject'
  },
  {
    title: 'Любимое',
    description: '20 треков',
    cover: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b585d650-d269-4f71-9d49-2d627ca1fdf3/Rectangle_1_%284%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221207T214249Z&X-Amz-Expires=86400&X-Amz-Signature=ac1e200d8cac248bf2c096b559f9aa0ecfe1814c48a2755a93cc39251e317965&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Rectangle%25201%2520%284%29.png%22&x-id=GetObject'
  },
  {
    title: 'Подборка №1',
    description: 'приколы 18+ треков',
    cover: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c6dd52ab-b299-403a-880c-c90f5ae11e52/Rectangle_1_%285%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221207T214258Z&X-Amz-Expires=86400&X-Amz-Signature=9e8c9f0d02656fe3f39965183442d1b39b4f03df36390221922f5eff72485fd8&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Rectangle%25201%2520%285%29.png%22&x-id=GetObject'
  },
  {
    title: 'Я сам собрал',
    description: '40 треков',
    cover: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/be72c327-cce6-4bc7-9970-fb3cc270c51d/Rectangle_1_%286%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221207T214303Z&X-Amz-Expires=86400&X-Amz-Signature=0ac6712ab5b21b7279112d9c320e51b733b0ba7ec5411680c289c361fb5abb40&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Rectangle%25201%2520%286%29.png%22&x-id=GetObject'
  },
  {
    title: 'НГ 2024',
    description: 'длится 20 минут',
    cover: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/444b5ed5-37e1-4c30-897a-97c624d18b35/Rectangle_1_%287%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221207T214308Z&X-Amz-Expires=86400&X-Amz-Signature=a23dfb20a258b90a2c0be763e79afcc6873a06fad2a01750e687a4f713ffb2cb&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Rectangle%25201%2520%287%29.png%22&x-id=GetObject'
  },
  {
    title: 'Дабстеп24',
    description: '20 треков',
    cover: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b6d43532-ce6a-436c-b3ae-3b7efa010937/Rectangle_1_%288%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221207T214314Z&X-Amz-Expires=86400&X-Amz-Signature=84f69fc18af685d2eeec4e62ece9c8415b4184d34efa1895342c1fb08b42186b&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Rectangle%25201%2520%288%29.png%22&x-id=GetObject'
  },
  {
    title: 'Супер',
    description: 'я люблю какать',
    cover: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/79be2d65-8d86-43b5-a64a-71cb3d83f657/Rectangle_1_%289%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221207T214318Z&X-Amz-Expires=86400&X-Amz-Signature=fa9e5fa8790b89910856bb8dce0e2c8edc142ad2671e8f195c0f70d39ba4333d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Rectangle%25201%2520%289%29.png%22&x-id=GetObject'
  }
];
export default CardSamples;
