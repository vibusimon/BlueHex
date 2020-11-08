import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import useWindowPosition from '../hook/useWindowPosition';

export default function Work() {
  const animated = useWindowPosition('header', 0.6);
  return (

    <div

      className="min-h-screen flex  items-center flex-col"
      style={{
        background: '#FEFEFE',
      }}
      id="mywork"
    >
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1 class="text-5xl font-dosis font-bold mb-10 ">Hello</h1>


    </div>
  );
}

const ProjectDetail = () => {
  const animated = useWindowPosition('header', 0.6);
  return (
    <div>
      <h1
        className={` ${animated ? '' : 'translate-y-10 opacity-0'
          }   transform transition duration-2000 inline-block m-4  font-dosis text-xl font-bold`}
      >
        {content.work.projectName}
      </h1>
      <p
        className={`${animated ? '' : 'translate-y-10 opacity-0'
          }  transform transition duration-2000 inline-block w-11/12 m-4  text-xl font-dosis`}
      >
        {content.work.desc}
      </p>
      <button
        className={`${animated ? '' : 'translate-y-10 opacity-0'
          } transform transition duration-2000  px-20 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl`}
      >
        <img
          src="https://timo.engineer/assets/icons/rocket.svg"
          alt="rocket"
          className="mr-5"
        />
        <p className="text-lg">Website</p>
      </button>
    </div>
  );
};
