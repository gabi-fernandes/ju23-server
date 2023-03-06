import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import React, { useState } from 'react';
import Capa from './capa.jpg';
import Seta from './seta-esquerda.PNG';

import ReactLoading from 'react-loading';

export default function App() {
  const [comoChegar, setComoChegar] = useState(false);
  const [confirme, setConfirme] = useState(false);
  const [nome, setNome] = useState('');
  const [qtPessoas, setQtPessoas] = useState(0);
  const [ciente, setCiente] = useState('');
  const [recado, setRecado] = useState('');
  const [confirmado, setConfirmado] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [loading, setLoading] = useState(false);

  async function vai() {
    setDisableButton(true);
    setLoading(true);
    if (!isNaN(qtPessoas)) {
      setQtPessoas(0);
    }

    let data = {
      data: {
        nome: nome,
        qtPessoas: qtPessoas,
        ciente: ciente,
        recado: recado,
      },
    };
    let response = await axios.post(`${process.env.REACT_APP_URL3}`, data);
    if (response.status == 200) {
      setLoading(false);
      setConfirmado(true);
    }
    setNome('');
    setQtPessoas('');
    setCiente('');
    setRecado('');
  }
  return (
   /* <div className="App" id={confirmado ? 'blocked' : ''}>
      {loading ? (
        <div id="loading">
          <ReactLoading type={'spin'} color="#fff" />
        </div>
      ) : (
        ''
      )}
      {confirmado ? (
        <>
          <div id="confirmado">
            <br></br>
            Obrigada pela confirmação!<br></br> <br></br>Te espero lá ❤️
          </div>
          <div
            onClick={() => {
              setConfirmado(false);
              setConfirme(false);
              setDisableButton(false);
            }}
            id="close"
          >
            x
          </div>
        </>
      ) : null}

      <img src={Capa} id="capa" />
      {!comoChegar && !confirme ? (
        <div id="buttons">
          <button onClick={() => setComoChegar(true)}>COMO CHEGAR</button>
          <button onClick={() => setConfirme(true)}>
            CONFIRME SUA PRESENÇA
          </button>
        </div>
      ) : (
        <>
          {comoChegar ? (
            <div id="como-chegar">
              <img
                onClick={() => setComoChegar(false)}
                src={Seta}
                height={30}
                style={{ paddingLeft: '1rem', position: "absolute", top: "2rem", left: "1rem"}}
              />
              <div id="div-como-chegar">
                <div id="texto-como-chegar">
                  Use o Waze para dirigir até Espaço Canto Belo, SP!
                </div>
                <button>
                  <a href="https://waze.com/ul/h6gy6wdym5" target="_blank">
                    Clica aqui!
                  </a>
                </button>
              </div>
            </div>
          ) : (
            <div id="background">
              <img
                onClick={() => {
                  setConfirme(false);
                  setConfirmado(false);
                  setDisableButton(false);
                }}
                src={Seta}
                height={30}
                style={{ paddingLeft: '1rem', position: "absolute", top: "2rem", left: "1rem"}}
              />
              <div id="confirme-presenca">
                <p>Nome:</p>
                <input onChange={(e) => setNome(e.target.value)} />
                <p>
                  Além de você mesmo(a)... Quantas pessoas você vai levar?{' '}
                  <br></br> <br></br> (Em número por favor)
                </p>
                <input
                  type={'number'}
                  onChange={(e) => setQtPessoas(e.target.value)}
                />
                <p>
                  Está ciente de que, caso esqueça o bikini, vai passar vontade
                  de entrar na piscina, e caso esqueça a sua bebida, vai passar
                  sede?
                </p>
                <div id="radio">
                  <input
                    type="radio"
                    name="fav_language"
                    value="SIM"
                    onChange={(e) => setCiente(e.target.value)}
                  />
                  <label for="Sim">SIM</label>
                  <input
                    type="radio"
                    name="fav_language"
                    value="NÃO"
                    onChange={(e) => setCiente(e.target.value)}
                  />
                  <label for="não">NÃO</label>
                </div>
                <p>Me deixa um recadinho, vai! ❤️</p>
                <textarea
                  id="recado"
                  rows="5"
                  onChange={(e) => setRecado(e.target.value)}
                ></textarea>
                <button
                  id="enviar"
                  onClick={vai}
                  style={disableButton ? { backgroundColor: 'gray' } : null}
                  disabled={disableButton ? true : false}
                >
                  Enviar!
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>*/
  );
}
