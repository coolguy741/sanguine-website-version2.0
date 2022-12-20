import React from 'react';
import Video from '../components/Video';

function About() {
  return (
    <>
      <div className="w-full max-h-[75vh] overflow-hidden flex">
        <Video src="/video/About.mov" poster="/video/poster/About.JPG"/>
      </div>
      <div className='md:flex p-7 flex-column'>
        <h4 className='md:basis-1/2 font-medium sm:text-4xl text-2xl pb-4 px-2'>
        Sanguine is a London-based<br/>
        full-service healthcare advertising<br/>
        agency.
        </h4>
        <div className='md: basis-1/2 px-2'>
          <p className='pb-1'>
            Sanguine was established to draw attention to the meaningful and revolutionary work of healthcare organisations around the world. We believe the organisations and individuals truly deserving of humanity’s attention are those committed to helping it.
          </p>
          <p>
            Our team comprises award-winning advertisers, marketers, and communications specialists who have strategised, conceived, and executed campaigns for global mega brands, which have been featured in over 30 markets. Harnessing our collective advertising experience and expertise we empower healthcare organisations to communicate more creatively, intelligently, and effectively so that they are in an even stronger position to make a salient difference in people’s lives.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
