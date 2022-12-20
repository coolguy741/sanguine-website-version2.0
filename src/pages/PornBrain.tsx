import React from 'react';
import Video from '../components/Video';

function PornBrain() {
  return (
    <>
      <div className="w-full max-h-[70vh] overflow-hidden">
        <Video src="/video/PORNBRAIN.mov" poster="/video/poster/PORNBRAIN.JPG"/>
      </div>
      <div className='md:flex p-7 flex-column'>
        <div className='md:basis-1/2 pb-4 px-2'>
          <h4 className='text-lg font-medium md:text-4xl'>
            The Porn Brain
          </h4>
          <p className='pt-4'>
            Special mention: Research in Psychedelics by the<br/>
            Faculty of Medicine, Imperial College London
          </p>
        </div>
        <div className='md: basis-1/2 px-2'>
          Every day over 120 million people watch porn online, oblivious to the harmful effects it is scientifically proven to have on their brains. To raise awareness of this important and growing issue we created The Porn Brain, a personalised educational tool. Leveraging data from 1000 MRI scans performed on porn addicts, The Porn Brain simulated users’ dopamine rewards system based on their porn viewing history and habits. The site visualised the consequences of regularly watching porn, from a reduced interest in romantic intimacy to a lack of motivation to exercise. A built-in data capture feature identified user trends that were supplied to addiction clinics in the U.K., helping them to tackle porn addiction on a more targeted level.
        </div>
      </div>
    </>
  );
}

export default PornBrain;
