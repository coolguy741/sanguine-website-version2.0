import React from 'react';
import Video from '../components/Video';

function FutureOfSurgery() {
  return (
    <>
      <div className="w-full max-h-[70vh] overflow-hidden">
        <Video src="/video/FUTUREOFSURGERY.mov" poster="/video/poster/FUTUREOFSURGERY.JPG"/>
      </div>
      <div className='md:flex p-7 flex-column'>
        <div className='md:basis-1/2 pb-4 px-2'>
          <h4 className='text-lg font-medium md:text-4xl '>
            The Future of Surgery
          </h4>
          <p className='pt-4'>
            Client: New Zealand Association of General Surgeons
          </p>
        </div>
        <div className='md: basis-1/2 px-2'>
          The New Zealand Association of General Surgeons engaged us to promote their 2022 conference titled The Future of Surgery. We responded with a hard-hitting digital campaign that envisioned an extremely advanced AI surgeon capable of operating on human patients without human supervision. The campaign launched with an animated banner in which a simulated AI surgeon appeared to stream its own operation in real time. Subsequent banners proposed a range of provocative scenarios, forcing surgeons to consider the dangers as well as the benefits of rapidly developing surgical technology.
        </div>
      </div>
    </>
  );
}

export default FutureOfSurgery;
