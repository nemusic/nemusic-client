import React from 'react';

import {
  screen, fireEvent, render
} from '@testing-library/react';

import { renderToString } from 'react-dom/server';

import '@testing-library/jest-dom/extend-expect';

import Track from './components/Track/Track';
import CardWoMui from './components/PlaylistCard/PlaylistCard';
import TrackList from './components/TrackList/TrackList';
import CardStack from './components/CardStack/CardStack';
import PlaylistHeader from './components/PlaylistHeader/PlaylistHeader';
import PlayButton from './components/PlayButton/PlayButton';

import cards from './samples/CardSamples';
import playlist from './samples/playlistSample';

describe('Track', () => {
  const track = <Track title="title" author="author" authorUrl="url" albumTitle="album title" albumUrl="url" albumCoverUrl="url" duration="32" isFavorite={false} />;

  it('should switch favorite_icon', () => {
    render(track);
    const addToFavorite = screen.getByTitle('addToFavorite');
    expect(screen.queryByTitle('inFavorite')).not.toBeInTheDocument();
    expect(screen.getByTitle('notInFavorite')).toBeInTheDocument();
    fireEvent.click(addToFavorite);
    expect(screen.getByTitle('inFavorite')).toBeInTheDocument();
    expect(screen.queryByTitle('notInFavorite')).not.toBeInTheDocument();
  });

  it('should switch play_icon', () => {
    render(track);
    const playButton = screen.getByTitle('playButton');
    expect(screen.queryByTitle('playing')).not.toBeInTheDocument();
    expect(screen.getByTitle('paused')).toBeInTheDocument();
    fireEvent.click(playButton);
    expect(screen.getByTitle('playing')).toBeInTheDocument();
    expect(screen.queryByTitle('paused')).not.toBeInTheDocument();
  });
});

describe('CardWoMui', () => {
  it('should render description', () => {
    const view = renderToString(<CardWoMui title="hello" description="this is cool playlist❤️❤️❤️" cover="super_cover_link" />);
    expect(view).toMatch('<p>this is cool playlist❤️❤️❤️</p>');
  });
});

describe('TrackList', () => {
  it('should show correct number of tracks', () => {
    render(<TrackList tracks={playlist.tracks} />);
    const renderedTracks = screen.getAllByText('Track ', { exact: false });
    expect(renderedTracks.length).toBe(playlist.tracks.length);
  });
});

describe('CardStack', () => {
  it('should show correct number of playlist cards', () => {
    render(<CardStack cards={cards} />);
    const renderedCards = screen.getAllByText('треков', { exact: false });
    expect(renderedCards.length).toBe(cards.length);
  });
});

describe('PlaylistHeader', () => {
  it('should render description', () => {
    render(<PlaylistHeader headerInfo={playlist.headerInfo} />);
    expect(screen.getByText(playlist.headerInfo.description)).toBeInTheDocument();
  });
});

describe('PlayButton', () => {
  it('should handle click', () => {
    render(<PlayButton />);
    expect(screen.getByTitle('playing')).toBeInTheDocument();
    expect(screen.queryByTitle('paused')).not.toBeInTheDocument();
    fireEvent.click(screen.getByTitle('button'));
    expect(screen.queryByTitle('playing')).not.toBeInTheDocument();
    expect(screen.getByTitle('paused')).toBeInTheDocument();
  });
});
