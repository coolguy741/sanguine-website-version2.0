import React from 'react';

function VideoBackground(props:any) {
  return (
      <video className='min-w-[100vw] min-h-[100vh] object-cover overflow-hidden' autoPlay muted plays-inline>
        <source src = {props.src} type = "video/mp4"/>
      </video>
  );
}

export default VideoBackground;
