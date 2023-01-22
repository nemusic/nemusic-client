import React from 'react';

import Profile from '../components/Profile';

import user from '../samples/UserSample';

import Page from './Page';

function ProfilePage() {
  return (
    <Page>
      <Profile avatar={user.avatar} name={user.name} description={user.description} />
    </Page>
  );
}

export default ProfilePage;
