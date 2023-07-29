import React, {useState, useEffect} from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
export default function Play({accessToken, trackUri}){

  const [play, setPlay] = useState(false);
  useEffect(()=> setPlay(true), [trackUri]);

  if(!accessToken) return null;
  return (
      <SpotifyPlayer 
      token={accessToken}
      showSaveIcon
      magnifySliderOnHover ={true}
      play={true}
      callback = {(state )=> {
        if(!state.isPlaying) setPlay(false)
      }}
      uris={trackUri ? [trackUri] :[]}
      
      />
    );
};