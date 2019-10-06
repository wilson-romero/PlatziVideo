import React from 'react';
import '../assets/styles/components/search.scss';

const Search = () => (
  <section className='search-bar d-flex flex-column justify-content-center align-items-center'>
    <h4 className='text-white'>¿Qué quieres ver hoy?</h4>
    <form className='mt-2 w-75'>
      <input type='search' className='w-100' placeholder='Buscar...' />
    </form>
  </section>
);
export default Search;
