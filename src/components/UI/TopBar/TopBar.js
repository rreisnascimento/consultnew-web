import React from 'react';

const TopBar = () => {
  return (
    <div className='top-bar pt-1 pb-1 text-light'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex pt-2 pb-2'>
            <div className='d-flex align-item-center mr-3'>
              <i className='fas fa-phone-alt mr-2' />
              <small>+55 (14) 99999-9999</small>
            </div>
            <div className='d-flex align-item-center'>
              <i className='fas fa-envelope mr-2' />
              <small>contato@contato.gmail.com</small>
            </div>
          </div>
          <div className='d-flex pt-2 pb-2'>
            <div className='social-media d-flex align-item-center'>
              <a href='!#' className='text-light'>
                <i className='fab fa-facebook-f mr-4' />
              </a>
              <a href='!#' className='text-light'>
                <i className='fab fa-instagram mr-4' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
