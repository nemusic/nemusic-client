import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playlist: {
    id: -1,
    title: 'empty',
    tracks: []
  },
  current: null,
  isPlaying: false
};

const findIndexOf = (state, id) => {
  for (let i = 0; i < state.playlist.tracks.length; i += 1) {
    if (id === state.playlist.tracks[i].id) {
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
      if (currentIndex >= 0 && currentIndex < state.playlist.tracks.length - 1) {
        state.current = state.playlist.tracks[currentIndex + 1];
        state.isPlaying = true;
      }
    },
    decremented(state) {
      const currentIndex = findCurrentIndex(state);
      if (currentIndex >= 1) {
        state.current = state.playlist.tracks[currentIndex - 1];
        state.isPlaying = true;
      }
    },
    trackChanged(state, action) {
      const index = findIndexOf(state, action.payload);
      if (index >= 0) {
        state.current = state.playlist.tracks[index];
        state.isPlaying = true;
      }
    },
    trackLikeChanged(state, action) {
      const index = findIndexOf(state, action.payload);
      const newVal = !state.playlist.tracks[index].isFavorite;
      state.playlist.tracks[index].isFavorite = newVal;
    },
    playlistChanged(state, action) {
      state.playlist = action.payload;
      const newCurrent = state.playlist.tracks[0];
      state.current = newCurrent;
      state.isPlaying = true;
    },
    isPlayingChanged(state, action) {
      state.isPlaying = action.payload;
    }
  }
});

export const {
  incremented,
  decremented,
  trackChanged,
  trackLikeChanged,
  playlistChanged,
  isPlayingChanged
} = playerSlice.actions;

export default playerSlice.reducer;
