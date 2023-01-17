import { configureStore } from '@reduxjs/toolkit';

import playerReducer from '../redux_features/player/player-slice';

export const store = configureStore({
  reducer: {
    player: playerReducer
  }
});
