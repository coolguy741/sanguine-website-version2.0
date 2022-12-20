import React from 'react';

function Home() {
  return (
    <div className='w-full max-h-[100vh] overflow-hidden'>
      <video className='min-w-[100vw] min-h-[100vh] object-cover' autoPlay muted plays-inline loop poster="/video/poster/Home.JPG">
        <source src = "/video/Home.mov" type = "video/mp4"/>
      </video>
    </div>
  );
}

export default Home;
