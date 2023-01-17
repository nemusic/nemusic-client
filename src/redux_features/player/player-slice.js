import { createSlice } from '@reduxjs/toolkit';

import TrackSamples from '../../samples/TrackSamples';

const initialState = { currentIndex: 0, playlist: TrackSamples, current: TrackSamples[0] };
const changeCurrent = (state) => {
  if (state.playlist.length > state.currentIndex) {
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
    setIndex(state, action) {
      state.currentIndex = action.payload;
      changeCurrent(state);
    }
  }
});

export const { incremented, decremented } = playerSlice.actions;
export default playerSlice.reducer;
