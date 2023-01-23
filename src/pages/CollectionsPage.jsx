import React, { useEffect, useState } from 'react';

import CardStack from '../components/CardStack/CardStack';
import authHeader from '../services/auth-header';

import Page from './Page/Page';

const API_URL = 'http://localhost:8080/api/user/collections';

function CollectionsPage() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(API_URL, { headers: authHeader() })
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  return (
    <Page>
      <div>
        <h1>Коллекции</h1>
        <CardStack cards={cards} writable />
      </div>
    </Page>
  );
}

export default CollectionsPage;
