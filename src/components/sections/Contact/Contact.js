import React from 'react';

import Section from '../../../HOC/Section';

const Contact = () => {
  return (
    <Section id='contact'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Entre em contato </span>conosco
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            Você está com dúvidas ou precisa relatar um problema com algum produto ou serviço. 
          </h6>
          <h6 className='section-subtitle mr-auto ml-auto'>
            Por favor, entre em contato conosco!
          </h6>          
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-9 col-lg-7 mr-auto ml-auto'>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='Nome'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='email'
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control rounded-0'
                    rows='5'
                    placeholder='Mensagem'
                  />
                </div>
                <div className='form-group text-center'>
                  <button className='btn btn-block btn-primary rounded-0 mr-auto ml-auto'>
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;