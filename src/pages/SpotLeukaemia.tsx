import React from 'react';
import Video from '../components/Video';

function SpotLeukaemia() {
  return (
    <>
      <div className="w-full max-h-[70vh] overflow-hidden">
        <Video src="/video/SPOTLEUKAEMIA.mp4" poster="/video/poster/SPOTLEUKAEMIA.JPG"/>
      </div>
      <div className='md:flex p-7 flex-column'>
        <div className='md:basis-1/2 pb-4 px-2'>
          <h4 className='font-medium sm:text-4xl text-2xl '>
            Spot Leukaemia
          </h4>
          <p className='pt-4'>
            Client: Leukaemia Care UK and Leukaemia UK
          </p>
        </div>
        <div className='md: basis-1/2 px-2'>
          Britain’s two largest leukaemia organisations Leukaemia U.K and Leukaemia Care approached us to deliver their joint UK-wide campaign to raise awareness of the 3 key symptoms of leukaemia and urge people experiencing them to speak up. At the time, relentless Covid messaging had fatigued the public, so we knew an unconventional creative strategy would be imperative to divert the public’s attention to yet another set of symptoms. To generate cut-through and memorability we built the campaign around an unexpected ambassador — an endearing gold-and-blue macaw, trained to create a catchy rap that would make the symptoms of leukaemia unforgettable. The campaign encouraged people to emulate the parrot’s outspoken nature and “parrot on” if they spot the symptoms.
        </div>
      </div>
    </>
  );
}

export default SpotLeukaemia;
