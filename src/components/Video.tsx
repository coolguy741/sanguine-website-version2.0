import React from 'react';

function Video(props:any) {
  return (
      <video className='h-full -z-1' autoPlay muted plays-inline>
        <source src = {props.src} type = "video/mp4"/>
      </video>
  );
}

export default Video;
