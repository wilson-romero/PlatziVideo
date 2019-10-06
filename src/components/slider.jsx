import React from 'react';
import '../assets/styles/components/slider.scss';

const Slider = ({ title, children }) => (
  <section className='slider'>
    <h5 className='text-white'>{title}</h5>
    <div className='slider__container my-4'>{children}</div>
  </section>
);

export default Slider;
