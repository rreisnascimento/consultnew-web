import React, { useState, useEffect } from 'react';

import Link from '../Link/Link';

const NavBar = () => {

  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = '';
      if (window.scrollY >= 200) {
        navClass = 'scrolled';
      }
      setNavClass(navClass);
    });
  }, []);
  
  return (
    <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
      <div className='container'>
        <a className='navbar-brand' href='!#'>
          <span>ConsultNew</span>
        </a>
        <div
          className={`navbar-toggler nav-icon ${(() => {
            if (toggeledNav) return 'open';
            return '';
          })()}`}
          onClick={toggleNav}
        >
          <span />
          <span />
          <span />
        </div>

        <div
          className={`collapse navbar-collapse ${(() => {
            if (toggeledNav) return 'show';
            return '';
          })()}`}
        >
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link target='home' offset={-120} classes='nav-link'>
                Principal
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='services' classes='nav-link'>
                Serviços
              </Link>
            </li>            
            <li className='nav-item'>
              <Link target='info' classes='nav-link'>
                Materias
              </Link>
            </li>            
            {/* <li className='nav-item'>
              <Link target='about' classes='nav-link'>
                About
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link target='blog' classes='nav-link'>
                Nosso Trabalho
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='contact' classes='nav-link'>
                Contato
              </Link>
            </li>                        
            <li className='nav-item'>
              <Link target='parceiro' classes='nav-link'>
                Parceiro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
