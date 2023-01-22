import { createSlice } from '@reduxjs/toolkit';

import TrackSamples from '../../samples/TrackSamples';

const initialState = {
  playlist: TrackSamples,
  playlistName: 'playlist',
  current: TrackSamples[0]
};

const findIndexOf = (state, id) => {
  for (let i = 0; i < state.playlist.length; i += 1) {
    if (id === state.playlist[i].id) {
      return i;
    }
  }
  return -1;
};

const findCurrentIndex = (state) => {
  return findIndexOf(state, state.current.id);
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    incremented(state) {
      const currentIndex = findCurrentIndex(state);
      if (currentIndex >= 0 && currentIndex < state.playlist.length - 1) {
        state.current = state.playlist[currentIndex + 1];
      }
    },
    decremented(state) {
      const currentIndex = findCurrentIndex(state);
      if (currentIndex >= 1) {
        state.current = state.playlist[currentIndex - 1];
      }
    },
    trackChanged(state, action) {
      const index = findIndexOf(state, action.payload);
      if (index >= 0) {
        state.current = state.playlist[index];
      }
    },
    trackLikeChanged(state, action) {
      const index = findIndexOf(state, action.payload);
      const newVal = !state.playlist[index].isFavorite;
      state.playlist[index].isFavorite = newVal;
    }
  }
});

export const {
  incremented,
  decremented,
  trackChanged,
  trackLikeChanged
} = playerSlice.actions;

export default playerSlice.reducer;
