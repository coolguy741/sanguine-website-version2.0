import React from 'react';

function Services() {
  return (
    <>
      <div className="flex justify-center bg-black text-white md:h-[70vh] p-8 pt-16">
        <div className='my-auto'>
          <h6 className='font-medium text-lg text-center'>
            Our team has provided advertising and PR consultancy to an array of
            world-leading healthcare organisations.
          </h6>
          <div className="flex flex-wrap justify-center align-middle mt-[30px]">
            <img className="md:h-[13vh] h-[100px] mx-2 my-4" src="/image/organizations/roche.png"/>
            <img className="md:h-[13vh] h-[100px] mx-2 my-4" src="/image/organizations/gsk.png"/>
            <img className="md:h-[13vh] h-[100px] mx-2 my-4" src="/image/organizations/ucb.png"/>
            <img className="md:h-[13vh] h-[100px] mx-2 my-4" src="/image/organizations/galderma.png"/>
            <img className="md:h-[13vh] h-[100px] mx-2 my-4" src="/image/organizations/alcon.png"/>
          </div>
        </div>
      </div>
      {/* <div className="md:flex p-7 flex-column">
        <div className="md:basis-1/2 pb-4 px-2">
          <h4 className="text-lg font-medium md:text-4xl">Let's work together</h4>
          <p className="pt-4">
            <i className="fa fa-envelope-o" aria-hidden="true"/>
            info@sanguineagency.com
          </p>
        </div>
        <div className="md: basis-1/2 px-2">
          <div className="panel">
            <div className="desc-item">
              <p><b>INVESTOR FILMS</b></p>
              <p>We produce succinct hype films to electrify investors.</p>
            </div>
            <div className="desc-item">
              <p><b>WEB DESIGN &amp; DEVELOPMENT</b></p>
              <p>
                We design and build elegant, dynamic and technologically advanced
                websites.
              </p>
            </div>
          </div>
          <div className="panel">
            <div className="desc-item">
              <p><b>CREATIVE ADVERTISING</b></p>
              <p>
                We conceive and execute 360 advertising campaigns for all media
                channels.
              </p>
            </div>
            <div className="desc-item">
              <p><b>PR CONSULTANCY</b></p>
              <p>
                We deliver strategies to increase brand awareness and generate
                brand talkability.
              </p>
            </div>
          </div>
          <div className="panel">
            <div className="desc-item">
              <p><b>BRAND DEVELOPMENT</b></p>
              <p>
                We devise brand toolkits, comprising a logo, a manifesto, and tone
                of voice guidelines.
              </p>
            </div>
            <div className="desc-item">
              <p><b>AUDIENCE RESEARCH</b></p>
              <p>
                We perform rigorous scientific studies of target audiences,
                identifying the key factors that most influence decision-making.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Services;
