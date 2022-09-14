import React, { useState, useEffect } from 'react';
import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/home_bg.jpg';
import Filter from '../Filter/Filter';

const Home = () => { 

  const [showResult, setShowResult] = useState(false);

  function handleFilter() {
    setShowResult(true);
  }    

  useEffect(() => {
    
  }, [showResult]);

  return (
    <div>
    <Section id='home'>
      <div>
        <div className='home-content p-5' style={{ backgroundImage: `url(${bgImage})` }}>
          <div className='intro container text-center text-light'>
            <h1 className='title'>Agende agora sua consulta</h1>
            <h2 className='sub-title mb-4'>
              Mais de 700 mil especialistas de saúde estão prontos para te ajudar
            </h2>
            <div className='container pt-2 pb-5'>
              <div className='section-content'>
                <div className='row'>
                  <div className='col-md-9 col-lg-7 mr-auto ml-auto'>
                    <form>
                      <div className='form-group'>
                        <input type='text' className='form-control rounded-0' placeholder='Especialista' />
                      </div>
                      <div className='form-group'>
                        <input type='text' className='form-control rounded-0' placeholder='Cidade' />
                      </div>
                    </form>
                    <div>
                      <button className='btn btn-block btn-primary rounded-0 mr-auto ml-auto' onClick={() => handleFilter()}>Pesquisar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </Section>
    {showResult && (
      <Filter />
    )}
    </div>
  );
};

export default Home;