import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from './../../../service/api';
import Section from '../../../HOC/Section';

const baseURL = "https://consultnew-api.herokuapp.com";

const Parceiro = () => {
  
  const [nome, setNome] = useState();  
  const [especialidade, setEspecialidade] = useState();
  const [endereco, setEndereco] = useState();
  const [complemento, setComplemento] = useState();  
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [uf, setUF] = useState();

  function ClearFields() {
    setNome("");
    setEspecialidade("");
    setEndereco("");
    setComplemento("");
    setBairro("");
    setCidade("");    
  };

  async function Save() {

    const reqPOST = { nome, especialidade, endereco, complemento, bairro, cidade, uf };
    const response = await axios.post(`${baseURL}/precadastro/create`, reqPOST);
    console.dir(reqPOST);
    console.dir(response.status);
    ClearFields();

    // axios.post(`${baseURL}/precadastro/create`, reqPOST, { 
    //   method: "POST"      
    // }
    // ).then((response) => {
    //   setPost(response.data);
    //   console.log(post);
    // });    
    

    // const reqPOST = {nome, especialidade, endereco, complemento, bairro, cidade, uf};
    // console.log(reqPOST);
      
    // const options = {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(reqPOST)
    //   };

    // fetch('https://consultnew-api.herokuapp.com/precadastro/create', options)
    //   .then(data => {
    //       if (!data.ok) {
    //         throw Error(data.status);
    //        }
    //        return data.json();
    //       }).then(update => {
    //         console.log(update);
    //       }).catch(e => {
    //         console.log("Deu erro aqui: " + e)
    //         console.log(e);
    //       });      

    // const response = await axios.post(`https://consultnew-api.herokuapp.com/precadastro/create`, reqPOST);
    // console.dir(reqPOST);
    // console.dir(response.data);
  };

  useEffect(() => {
    // axios.get(`${baseURL}/precadastro/all`).then((response) => {
    //   setPost(response.data);
    //   console.log(response.data);
    // })
  }, []);  

  return (
    <Section id='parceiro'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Entre em Contato</span> conosco
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            Seja um parceiro ConsultNew e ofereça a qualidade dos seus serviços a milhares de pessoas.
            Entre em contato conosco para maiores informações sobre o Serviço.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-9 col-lg-7 mr-auto ml-auto'>

                <div className='form-group'>
                  <input 
                    id="nome"
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Nome do Profissinal"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input 
                    id="especialidade"
                    type='text' 
                    className='form-control rounded-0' 
                    placeholder='Especialidade'
                    value={especialidade}
                    onChange={(e) => setEspecialidade(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input 
                    id="endereco"
                    type='text' 
                    className='form-control rounded-0' 
                    placeholder='Endereço'
                    onChange={e => setEndereco(e.target.value)} value={endereco} />
                </div>
                <div className='form-group'>
                  <input type='text' className='form-control rounded-0' placeholder='Complemento'
                      onChange={e => setComplemento(e.target.value)} value={complemento} />
                </div>
                <div className='form-group'>
                  <input type='text' className='form-control rounded-0' placeholder='Bairro'
                      onChange={e => setBairro(e.target.value)} value={bairro} />
                </div>                                
                <div className='form-group'>
                  <input type='text' className='form-control rounded-0' placeholder='Cidade'
                      onChange={e => setCidade(e.target.value)} value={cidade} />
                </div>

                <div>
                <select className='form-group form-control rounded-0' 
                  value={uf} 
                  onChange={(e) => setUF(e.target.value)}>
                  <option value="Acre">Acre</option>
                  <option value="Alagoas">Alagoas</option>
                  <option value="Amapa">Amapá</option>
                  <option value="Amazonas">Amazonas</option>
                  <option value="Bahia">Bahia</option>
                  <option value="Ceara">Cearáa</option>
                  <option value="DistritoFederal">Distrito Federal</option>
                  <option value="EspiritoSanto">Espirito Santo</option>
                  <option value="Goias">Goiás</option>
                  <option value="Maranhao">Maranhão</option>
                  <option value="MatoGrosso">Mato Grosso</option>
                  <option value="MatoGrossoSul">Mato Grosso do Sul</option>
                  <option value="MinasGerais">Minas Gerais</option>
                  <option value="Para">Pará</option>
                  <option value="Paraiba">Paraíba</option>
                  <option value="Parana">Paraná</option>                  
                  <option value="Pernambuco">Pernambuco</option>
                  <option value="Piaui">Piaui</option>
                  <option value="RioJaneiro">Rio de Janeiro</option>
                  <option value="RioGrandeNorte">Rio Grande do Norte</option>
                  <option value="RioGrandeSul">Rio Grande do Sul</option>
                  <option value="Rondonia">Rondonia</option>
                  <option value="Roraima">Roraima</option>
                  <option value="SantaCatarina">Santa Catarina</option>
                  <option value="SaoPaulo">São Paulo</option>
                  <option value="Sergipe">Sergipe</option>
                  <option value="Tocantis">Tocantis</option>
                </select>                  
                </div>
                <div className='form-group text-center'>
                  <button className='btn btn-block btn-primary rounded-0 mr-auto ml-auto' onClick={Save}>
                    Quero ser um Parceiro
                  </button>
                </div>

            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Parceiro;