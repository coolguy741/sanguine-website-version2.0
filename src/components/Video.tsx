import React from 'react';

function Video(props:any) {
  return (
    <video className='w-[100vw] object-cover' autoPlay loop muted plays-inline poster={props.poster}>
      <source src = {props.src} type = "video/mp4"/>
    </video>
  );
}

export default Video;
