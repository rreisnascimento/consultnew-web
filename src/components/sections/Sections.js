import React, { Fragment } from 'react';

import Home from './Home/Home';
import Service from './Service/Service';
import Facts from './Facts/Facts';
import Blog from './Blog/Blog';
import Info from './Info/Info';
import Parceiro from './Parceiro/Parceiro';

const Sections = () => {
  return (
    <Fragment>
      <Home />
      <Service />
      <Info />
      <Blog />
      <Facts />
      <Parceiro />
    </Fragment>
  );
};

export default Sections;