import React from 'react';
import '../assets/styles/components/categories.scss';

const Categories = ({ name, children }) => (
  <section className='categories'>
    {children}
  </section>
);

export default Categories;
