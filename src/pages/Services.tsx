import React from 'react';

function Services() {
  return (
    <>
      <div className="flex justify-center bg-black text-white md:h-[70vh] p-8 pt-32">
        <div className='my-auto'>
          <h6 className='font-medium text-lg text-center'>
            Our team has provided advertising and PR consultancy to an array of
            world-leading healthcare organisations.
          </h6>
          <div className="flex flex-wrap justify-center align-middle mt-[30px]">
            <img className="md:h-[13vh] h-[100px] mx-2 my-4 animate-waving-hand" src="/image/organizations/roche.png"/>
            <img className="md:h-[13vh] h-[100px] mx-2 my-4 animate-waving-hand" src="/image/organizations/gsk.png"/>
            <img className="md:h-[13vh] h-[100px] mx-2 my-4 animate-waving-hand" src="/image/organizations/ucb.png"/>
            <img className="md:h-[13vh] h-[100px] mx-2 my-4 animate-waving-hand" src="/image/organizations/galderma.png"/>
            <img className="md:h-[13vh] h-[100px] mx-2 my-4 animate-waving-hand" src="/image/organizations/alcon.png"/>
          </div>
        </div>
      </div>
      <div className="md:flex p-7 flex-column">
        <div className="md:basis-1/2 pb-4 px-2">
          <h4 className="font-medium sm:text-4xl text-2xl">Let's work together</h4>
          <p className="pt-4">
            <i className="fa fa-envelope-o pr-1" aria-hidden="true"></i>
            info@sanguineagency.com
          </p>
        </div>
        <div className="md: basis-1/2 px-2 flex-col">
          <div className="panel">
            <div className="desc-item">
              <h6 className='desc-item-heading'><b>INVESTOR FILMS</b></h6>
              <p>We produce succinct hype films to electrify investors.</p>
            </div>
            <div className="desc-item">
              <h6 className='desc-item-heading'><b>WEB DESIGN &amp; DEVELOPMENT</b></h6>
              <p className='desc-item-content'>
                We design and build elegant, dynamic and technologically advanced
                websites.
              </p>
            </div>
          </div>
          <div className="panel">
            <div className="desc-item">
              <h6 className='desc-item-heading'><b>CREATIVE ADVERTISING</b></h6>
              <p className='desc-item-content'>
                We conceive and execute 360 advertising campaigns for all media
                channels.
              </p>
            </div>
            <div className="desc-item">
              <h6 className='desc-item-heading'><b>PR CONSULTANCY</b></h6>
              <p className='desc-item-content'>
                We deliver strategies to increase brand awareness and generate
                brand talkability.
              </p>
            </div>
          </div>
          <div className="panel">
            <div className="desc-item">
              <h6 className='desc-item-heading'><b>BRAND DEVELOPMENT</b></h6>
              <p className='desc-item-content'>
                We devise brand toolkits, comprising a logo, a manifesto, and tone
                of voice guidelines.
              </p>
            </div>
            <div className="desc-item">
              <h6 className='desc-item-heading'><b>AUDIENCE RESEARCH</b></h6>
              <p className='desc-item-content'>
                We perform rigorous scientific studies of target audiences,
                identifying the key factors that most influence decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
