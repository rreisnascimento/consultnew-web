import React, { useState, useEffect } from 'react';
import Section from '../../../HOC/Section';
import api from '../../../service/api';

const Parceiro = () => {
  
  const [nome, setNome] = useState();  
  const [clinica, setClinica] = useState();
  const [especialidade, setEspecialidade] = useState();
  const [cep, setCep] = useState();  
  const [endereco, setEndereco] = useState();
  const [complemento, setComplemento] = useState();  
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [uf, setUF] = useState();
  const [comercial, setComercial] = useState();
  const [celular, setCelular] = useState();
  const [email, setEmail] = useState();
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");  

  function ClearFields() {
    setNome("");
    setClinica("");
    setEspecialidade("");
    setCep("");
    setEndereco("");
    setComplemento("");
    setBairro("");
    setCidade("");
    setUF("");
    setComercial("");
    setCelular("");
    setEmail("");
    setVisible(false);
    setMessage("");
  };
  
  async function BuscarCEP() {
    const cepFilter = cep?.replace(/[^0-9]/g, '');
    if (cepFilter?.length == 8) {
      fetch(`https://viacep.com.br/ws/${cepFilter}/json/`)
        .then((res) => res.json())
        .then((data) => {
          setEndereco(data.logradouro);
          setBairro(data.bairro);
          setCidade(data.localidade);
          setUF(data.uf);
        });
      };
  };

  async function Save() {
    let res = await api.createParceiro(nome, clinica, especialidade, cep, endereco, complemento, bairro, cidade, uf, comercial, celular, email);
    if (res.status == 400) {
      setVisible(true);
      setMessage(res.message);
    } else if (res.status == 201) {
      setVisible(false);
      setMessage("");      
      ClearFields();
    };
  };

  useEffect(() => {

  }, []);

  return (
    <Section id='parceiro'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Entre em Contato</span> conosco
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            Seja um parceiro ConsultNew e ofere??a a qualidade dos seus servi??os a milhares de pessoas.
            Entre em contato conosco para maiores informa????es sobre o Servi??o.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-9 col-lg-7 mr-auto ml-auto'>
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Nome do Profissional</span>
                <input id="profissional" type="text" class="form-control"                   
                  value={nome} onChange={e => setNome(e.target.value)} />   
              </div>

              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Cl??nica</span>
                <input id="clinica" type="text" class="form-control" 
                  value={clinica} onChange={e => setClinica(e.target.value)} />
              </div>              

              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Especialidade</span>
                <input id="especialidade" type="text" class="form-control" 
                  value={especialidade} onChange={e => setEspecialidade(e.target.value)} />
              </div>

              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">CEP</span>
                <input id="cep" type="text" class="form-control" 
                  placeholder="99999-999"
                  value={cep} onChange={e => setCep(e.target.value)} />
                <button className='btn btn-primary rounded-0' onClick={BuscarCEP}>Buscar Endere??o</button>
              </div>

              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Endere??o</span>
                <input id="endereco" type="text" class="form-control" 
                  value={endereco} onChange={e => setEndereco(e.target.value)} />     
              </div>                            

              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Complemento</span>
                <input id="complemento" type="text" class="form-control" 
                  value={complemento} onChange={e => setComplemento(e.target.value)} />
                <span class="input-group-text" id="addon-wrapping">Bairro</span>
                <input id="bairro" type="text" class="form-control" 
                  value={bairro} onChange={e => setBairro(e.target.value)} />
              </div>              
              
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Cidade</span>
                <input id="cidade" type="text" class="form-control" 
                  value={cidade} onChange={e => setCidade(e.target.value)} />
                <span class="input-group-text" id="addon-wrapping">Estado</span>
                <select className='form-group form-control rounded-0' 
                  value={uf} onChange={e => setUF(e.target.value)}>
                  <option value=""></option>
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>                  
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SP">SP</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </select>
              </div>              

              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Telefone Comercial</span>
                <input id="comercial" type="text" class="form-control" 
                  placeholder="(99) 9 9999-9999"
                  value={comercial} onChange={e => setComercial(e.target.value)} />
                <span class="input-group-text" id="addon-wrapping">Celular</span>
                <input id="celular" type="text" class="form-control" 
                  placeholder="(99) 9 9999-9999"
                  value={celular}
                  onChange={e => setCelular(e.target.value)} />
              </div>                                     
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">email</span>
                <input id="email" type="email" class="form-control" 
                  placeholder="Informe um email v??lido"
                  value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className='form-group text-center'>
                {visible && (
                  <span className='input-test'>{message}</span>
                )}                
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