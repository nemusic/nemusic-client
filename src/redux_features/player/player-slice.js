import { createSlice } from '@reduxjs/toolkit';

import TrackSamples from '../../samples/TrackSamples';

const initialState = {
  currentIndex: 0,
  playlist: TrackSamples,
  playlistName: 'playlist',
  current: TrackSamples[0]
};

const changeCurrent = (state) => {
  if (state.playlist.length > state.currentIndex && state.currentIndex >= 0) {
    state.current = state.playlist[state.currentIndex];
  }
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    incremented(state) {
      state.currentIndex = Math.min(Math.max(0, state.playlist.length - 1), state.currentIndex + 1);
      changeCurrent(state);
    },
    decremented(state) {
      state.currentIndex = Math.max(state.currentIndex - 1, 0);
      changeCurrent(state);
    },
    indexSet(state, action) {
      state.currentIndex = action.payload;
      changeCurrent(state);
    },
    trackLikeChanged(state, action) {
      const newVal = !state.playlist[action.payload].isFavorite;
      state.playlist[action.payload].isFavorite = newVal;
    }
  }
});

export const {
  incremented,
  decremented,
  indexSet,
  trackLikeChanged
} = playerSlice.actions;

export default playerSlice.reducer;
