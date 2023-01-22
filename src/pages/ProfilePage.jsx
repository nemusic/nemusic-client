import React, { useState, useEffect } from 'react';

import Profile from '../components/Profile/Profile';
import authHeader from '../services/auth-header';

import Page from './Page/Page';

const API_URL = 'http://localhost:8080/api/user';

function ProfilePage() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(API_URL, { headers: authHeader() })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <Page>
      <Profile avatar={user.avatar} name={user.username} description={user.bio} />
    </Page>
  );
}

export default ProfilePage;
