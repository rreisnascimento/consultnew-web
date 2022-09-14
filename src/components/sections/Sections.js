import React, { Fragment } from 'react';

import Home from './Home/Home';
import About from './About/About';
import Service from './Service/Service';
import Facts from './Facts/Facts';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import MapMarker from './MapMarker/MapMarker';
import Info from './Info/Info';
import Parceiro from './Parceiro/Parceiro';

const Sections = () => {
  return (
    <Fragment>
      <Home />
      <Service />
      <Info />
      {/* <About /> */}
      <Blog />
      <Facts />
      <Contact />
      <Parceiro />
      {/* <MapMarker /> */}
    </Fragment>
  );
};

export default Sections;