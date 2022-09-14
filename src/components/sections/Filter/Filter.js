import React from 'react';

const Filter = () => {

  const dataJSON = [
    {id: 1, name: 'Dr. Frederico Freitas', especialidade: 'Especialista em Coração', cidade: 'Bauru/SP'},
    {id: 2, name: 'Dr. Alecu Pompeu', especialidade: 'Especialista em Neuro', cidade: 'Jau/SP'},
    {id: 3, name: 'Dr. Maria Candida', especialidade: 'Dentista', cidade: 'Maringa/PR'},
    {id: 4, name: 'Dr. Francisco Dutra', especialidade: 'Especialista em Pneumonia', cidade: 'São Carlos/SP'},
    {id: 5, name: 'Dr. Adelaide Santos', especialidade: 'Otorrinologista', cidade: 'Lençois Paulista/SP'},
    {id: 6, name: 'Dr. Guilherme Santos', especialidade: 'Pediatra Infantil', cidade: 'Bauru'},
    {id: 7, name: 'Dr. João Santan', especialidade: 'Clinico Geral', cidade: 'Marilia/SP'}
  ];    

  return (
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Especialista </span>disponíveis
          </h3>
        </div>

        <div className='section-content'>
          <div className='row'>
            {dataJSON.map((item, indice) => 
              <div className='col-md-6 col-lg-4 mb-3'>
                <div className='filter-box d-flex'>
                  <div className='filter-icon mr-4'>
                    <i className='fas fa-briefcase' />
                  </div>
                  <div className='filter-body'>
                    <h5 className='filter-title'>{item.name}</h5>
                    <p className='filter-description'>
                      {item.especialidade}                    
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

  );
};

export default Filter;
