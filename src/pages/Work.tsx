import React from 'react';
import { Link } from 'react-router-dom';

function Work() {
  return (
    <>
        <div className='lg:flex flex-column overflow-hidden'>
          <Link to = "/work/pornbrain"><img className="lg:h-screen lg:w-[33.33vw] h-[33vh] w-full flex-initial object-cover transition ease-linear hover:scale-110 duration-500" src="/image/BRAIN.png"/></Link>
          <Link to = "/work/spotleukaemia"><img className="lg:h-screen lg:w-[33.33vw] h-[33vh] w-full flex-initial object-cover transition ease-linear hover:scale-110 duration-500" src="/image/Spot Leukaemia.png"/></Link>
          <Link to = "/work/futureofsurgery"><img className="lg:h-screen lg:w-[33.33vw] h-[33vh] w-full flex-initial object-cover transition ease-linear hover:scale-110 duration-500" src="/image/SURGERY CONFERENCE.png"/></Link>
        </div>
    </>
  );
}

export default Work;
