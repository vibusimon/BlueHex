import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import content from '../content';

export default function Stack() {
  return (
    <div
      className="min-h-screen flex items-center justify-center flex-col"
      style={{
        background: '#eee',
      }}
    >
      <h1 className="text-5xl font-dosis font-bold mb-10">Stack I Use</h1>
      <div>
        <div className="flex flex-wrap justify-center">

        </div>
      </div>
      <p className="mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis ">
        {content.stack.desc}.
      </p>
    </div>
  );
}
