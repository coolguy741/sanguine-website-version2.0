import React from 'react';
import { Link } from 'react-router-dom';

function Work() {
  return (
    <>
        <div className='flex flex-col lg:flex-row'>
          <Link className="overflow-hidden" to = "/work/pornbrain"><img className="lg:h-screen lg:w-[33.33vw] h-[33vh] w-full flex-initial object-cover transition ease-linear hover:scale-110 duration-500" src="/image/BRAIN.png" alt='brain'/></Link>
          <Link className="overflow-hidden" to = "/work/spotleukaemia"><img className="lg:h-screen lg:w-[33.33vw] h-[33vh] w-full flex-initial object-cover transition ease-linear hover:scale-110 duration-500" src="/image/Spot Leukaemia.png" alt="Spot Leukaemia"/></Link>
          <Link className="overflow-hidden" to = "/work/futureofsurgery"><img className="lg:h-screen lg:w-[33.33vw] h-[33vh] w-full flex-initial object-cover transition ease-linear hover:scale-110 duration-500" src="/image/SURGERY CONFERENCE.png" alt="Future of Surgery"/></Link>
        </div>
    </>
  );
}

export default Work;
