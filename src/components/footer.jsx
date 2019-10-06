import React from 'react';

import '../assets/styles/components/footer.scss';

const Footer = () => (
  <footer className='pb-4 pt-4'>
    <div className='container'>
      <div className='row text-center'>
        <div className='col-12 col-md'>
          <a href='#'>Terminos de uso</a>
        </div>
        <div className='col-12 col-md'>
          <a href='#'>Declaración de privacidad</a>
        </div>
        <div className='col-12 col-md'>
          <a href='#'>Centro de ayuda</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
