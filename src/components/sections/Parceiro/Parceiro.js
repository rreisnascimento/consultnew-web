import React, { useState, useEffect } from 'react';
import api from './../../../service/api';
import Section from '../../../HOC/Section';

const Parceiro = () => {

  const [nome, SetNome] = useState();
  const [especialidade, SetEspecialidade] = useState();
  const [endereco, SetEndereco] = useState();
  const [complemento, SetComplemento] = useState();  
  const [bairro, SetBairro] = useState();
  const [cidade, SetCidade] = useState();
  const [uf, SetUF] = useState();

  async function Save() {
   
    await api.post(`/precadastro/create`, {
      nome,
      especialidade,
      endereco,
      complemento,
      bairro,
      cidade,
      uf
      }).then(() => {
        console.log('Deu alguma BO aqui para gravação');
      });    
  };

  useEffect(() => {
  }, []);  

  return (
    <Section id='parceiro'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Torne se um </span>Parceiro
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            Seja um parceiro ConsultNew e ofereça a qualidade dos seus serviços a milhares de pessoas.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-9 col-lg-7 mr-auto ml-auto'>
              <form>
                <div className='form-group'>
                  <input type='text' className='form-control rounded-0' placeholder='Nome do Profissinal'
                      onChange={e => SetNome(e.target.value)} value={nome} />
                </div>
                <div className='form-group'>
                  <input type='text' className='form-control rounded-0' placeholder='Especialidade'
                      onChange={e => SetEspecialidade(e.target.value)} value={especialidade} />
                </div>
                <div className='form-group'>
                  <input type='text' className='form-control rounded-0' placeholder='Endereço'
                      onChange={e => SetEndereco(e.target.value)} value={endereco} />
                </div>
                <div className='form-group'>
                  <input type='text' className='form-control rounded-0' placeholder='Complemento'
                      onChange={e => SetComplemento(e.target.value)} value={complemento} />
                </div>
                <div className='form-group'>
                  <input type='text' className='form-control rounded-0' placeholder='Bairro'
                      onChange={e => SetBairro(e.target.value)} value={bairro} />
                </div>                                
                <div className='form-group'>
                  <input type='text' className='form-control rounded-0' placeholder='Cidade'
                      onChange={e => SetCidade(e.target.value)} value={cidade} />
                </div>
                <div className='form-group'>
                  <input type='text' className='form-control rounded-0' placeholder='UF'
                      onChange={e => SetUF(e.target.value)} value={uf} />
                </div>
                <div className='form-group text-center'>
                  <button className='btn btn-block btn-primary rounded-0 mr-auto ml-auto' onClick={Save}>
                    Quero ser um Parceiro
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

export default Parceiro;