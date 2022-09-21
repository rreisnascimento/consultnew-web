import React from 'react';
import axios from 'axios';

import Section from '../../../HOC/Section';
import blogImage1 from '../../../assets/img/blog1.jpg';
import blogImage2 from '../../../assets/img/blog2.jpg';
import blogImage3 from '../../../assets/img/blog3.jpg';

const baseURL = "https://consultnew-api.herokuapp.com";

const Blog = () => {

  const reqPOST = { nome: "CRUD API", especialidade: "Nenhuma", endereco: "Nenhum", complemento: "Casa", bairro: "Centro", cidade: "Manaus", uf: "PE" };

  async function Save() {
    axios.post(`${baseURL}/precadastro/create`, reqPOST ).then((response) => {
      console.dir(response.data);
    });    


    // const reqPOST = { nome: "CRUD API", especialidade: "Nenhuma", endereco: "Nenhum", complemento: "Casa", bairro: "Centro", cidade: "Manaus", uf: "PE" };
    // const response = await axios.post(`https://consultnew-api.herokuapp.com/precadastro/create`, reqPOST);
    // console.dir(reqPOST);
    // console.dir(response.data);  
  };  

  return (
    <Section id='blog'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Nosso </span>Trabalho
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage1} className='card-img-top' alt='Blog 1' />
                <div className='card-body'>
                  <h5 className='card-title'>Projeto de Triagem Neonatal para Imunodeficiências</h5>
                  <p className='card-text'>
                    Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    cillum dolore eu fugiat nulla pariatur commodo
                    consequat.cillum dolore eu fugiat pariatur....
                  </p>
                  <a href='#!' className='btn btn-sm btn-primary' onClick={Save}>
                    Salvar
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage2} className='card-img-top' alt='Blog 2' />
                <div className='card-body'>
                  <h5 className='card-title'>Projeto Rastreio Ocular (Eye Tracking)</h5>
                  <p className='card-text'>
                    Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    cillum dolore eu fugiat nulla pariatur commodo
                    consequat.cillum dolore eu fugiat pariatur....
                  </p>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Leia mais
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage3} className='card-img-top' alt='Blog 3' />
                <div className='card-body'>
                  <h5 className='card-title'>VII Simpósio de Atualização em Transtorno do Espectro Autista</h5>
                  <p className='card-text'>
                    Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    cillum dolore eu fugiat nulla pariatur commodo
                    consequat.cillum dolore eu fugiat pariatur....
                  </p>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Leia mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
