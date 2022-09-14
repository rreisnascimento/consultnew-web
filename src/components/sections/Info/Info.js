import React from 'react';

import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about.jpg';
import autimosImage1 from '../../../assets/img/autismo1.jpg';
import autimosImage2 from '../../../assets/img/autismo2.jpg';
import autimosImage3 from '../../../assets/img/autismo3.jpg';

const Info = () => {
  return (
    <Section id='info'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Informações </span>Autismo
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            Individualized quality care that meets the total needs of the
            patient Individualized quality care that quality care that
            Individualized quality care that meets the total.
          </h6>
        </div>
        
        <div className='section-content'>
          
          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='infoImage'>
                <img src={autimosImage1} alt='info company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <h3 className='info-title'>O que é Autismo?</h3>
              <div className='info-description'>
                <p>
                  O transtorno do espectro autista (TEA) é um distúrbio do neurodesenvolvimento caracterizado por 
                  desenvolvimento atípico, manifestações comportamentais, déficits na comunicação e na interação 
                  social, padrões de comportamentos repetitivos e estereotipados, podendo apresentar um 
                  repertório restrito de interesses.
                </p>
                <p>
                  Tenha uma experiência formativa no Grupo Lusíadas Saúde com impacto profissional.                   
                </p>
                <p>
                  Aumente a sua autonomia e competências profissionais. Oportunidade de carreira.
                </p>
                <button className='btn btn-primary rounded-0'>Leia mais</button>
              </div>
            </div>
          </div>


          <div className='row'>
            <div className='col-md-12 col-lg-6'>
              <h3 className='info-title'>O que é Autismo?</h3>
              <div className='info-description'>
              <p>
                  O transtorno do espectro autista (TEA) é um distúrbio do neurodesenvolvimento caracterizado por 
                  desenvolvimento atípico, manifestações comportamentais, déficits na comunicação e na interação 
                  social, padrões de comportamentos repetitivos e estereotipados, podendo apresentar um 
                  repertório restrito de interesses.
                </p>
                <p>
                  Tenha uma experiência formativa no Grupo Lusíadas Saúde com impacto profissional.                   
                </p>
                <p>
                  Aumente a sua autonomia e competências profissionais. Oportunidade de carreira.
                </p>
                <button className='btn btn-primary rounded-0'>Leia mais</button>
              </div>
            </div>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='infoImage'>
                <img src={autimosImage2} alt='info company' />
              </div>
            </div>            
          </div>          

          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='infoImage'>
                <img src={autimosImage3} alt='info company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <h3 className='info-title'>O que é Autismo?</h3>
              <div className='info-description'>
              <p>
                  O transtorno do espectro autista (TEA) é um distúrbio do neurodesenvolvimento caracterizado por 
                  desenvolvimento atípico, manifestações comportamentais, déficits na comunicação e na interação 
                  social, padrões de comportamentos repetitivos e estereotipados, podendo apresentar um 
                  repertório restrito de interesses.
                </p>
                <p>
                  Tenha uma experiência formativa no Grupo Lusíadas Saúde com impacto profissional.                   
                </p>
                <p>
                  Aumente a sua autonomia e competências profissionais. Oportunidade de carreira.
                </p>
                <button className='btn btn-primary rounded-0'>Leia mais</button>
              </div>
            </div>
          </div>          




        </div>
      </div>
    </Section>
  );
};

export default Info;
