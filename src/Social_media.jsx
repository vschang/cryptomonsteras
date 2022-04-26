import React from 'react'
import './Social_media.css'
import igLogo from './images/ig_logo.png';
import spotifyLogo from './images/spotify_logo.png';

const SocialMedia = () => {
  return (
    <div className='Flex'>
      <a href="https://www.instagram.com/cryptomonstera/">
        <img src={igLogo} className="Ig-logo" alt='instagram logo' />
      </a>
      <a href="https://reactjs.org">
        <img src={spotifyLogo} className="Spotify-logo" alt='spotify logo' />
      </a>
    </div>
  );
}

export default SocialMedia
