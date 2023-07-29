import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function TrackSearchResult({track, chooseTrack}){
  function handlePlay(){
    chooseTrack(track);
  }
  return (
  <div 
    className='d-flex m-2 align-items-center' 
    style={{cursor:'pointer'}} 
    onClick={handlePlay} 
  >
    <img src={track.albumUrl} 
    style={{height:'64px', width:'64px', borderRadius:'20%'}} />
    
    <div className='m-3'>
      <div className='ml-5'>{track.title}</div>
      <div className='text-muted'>{track.artist}</div>
    </div>
    
  </div>
  );
}