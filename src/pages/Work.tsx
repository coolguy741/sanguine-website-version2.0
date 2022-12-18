import React from 'react';
import { Link } from 'react-router-dom';

function Work() {
  return (
    <>
        <div className='flex'>
          <Link to = "/work/pornbrain"><img className="h-screen w-[33.33vw] flex-initial object-cover transition ease-linear hover:scale-110 duration-500" src="/image/BRAIN.png"/></Link>
          <Link to = "/work/spotleukaemia"><img className="h-screen w-[33.33vw] flex-initial object-cover transition ease-linear hover:scale-110 duration-500" src="/image/Spot Leukaemia.png"/></Link>
          <Link to = "/work/futureofsurgery"><img className="h-screen w-[33.33vw] flex-initial object-cover transition ease-linear hover:scale-110 duration-500" src="/image/SURGERY CONFERENCE.png"/></Link>
        </div>
    </>
  );
}

export default Work;
