import React, { useState } from 'react';
import axios from "axios";
import { Menu } from '../Components/Menu/Menu.jsx'
import { Footer } from '../Components/footer/Footer.jsx'
import './newevent.scss'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';


  
function alertanimation() {

  swal({
    title: "Parabéns",
    text: "Evento Criado com Sucesso",
    icon: "success",
    button: "Click aqui"
  });
}

export const NewEvent = () => {


  const history = useHistory();
  const routChange = () => {

    let path = '/'
    setTimeout(() => {
          history.push(path)
    }, 2000);


  }
//settandos inputs

  const [anypath,setAnypath] = useState()
  const [name, setName] = useState('');
  const [est, setEst] = useState('');
  const [city, setCity] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const [dates, setDates] = useState('');

  const handleSubmit = (e) => {
    setAnypath(routChange)
    alertanimation()
    e.preventDefault()
    setLoading(true);
    setIsError(false);
    const data = {
      Nome: name,
      Estado: est,
      Preço: `R$:${price}`,
      Cidade: city,
      Descrição: desc,
      Data: dates
    }

    axios.post('http://localhost:5000/Eventos', data).then(res => {
      setData(res.data);
      setName('');
      setEst('');
      setPrice('');
      setCity('');
      setDesc('');
      setLoading(false);
      setDates('')
    }).catch(err => {
      setLoading(false);
      setIsError(true);
    });
  }

  return (
    <>
      <Menu />
      <main className="container">
        <form
          action=""
          method="post"
          onSubmit={handleSubmit}>
          <fieldset>
            <p>PASSO 1</p>
            <h2>Conte um pouco sobre seu evento</h2>
            <input
              type="text"
              value={name}
              placeholder="Título do evento"
              required
              onChange={
                (e) => { setName(e.target.value) }
              } />
            <textarea
              value={desc}
              placeholder="Descrição do evento"
              maxLength="100"
              required
              onChange={
                (e) => { setDesc(e.target.value) }
              } />
          </fieldset>

          <fieldset>
            <p>PASSO 2</p>
            <h2>Quando será e quanto custará o ingresso?</h2>
            <div>
              <input
                type="data"
                value={dates}
                placeholder="Data do evento"
                required
                onChange={
                  (e) => { setDates(e.target.value) }
                } />

              <input
                type="number"
                value={price}
                placeholder="Valor do ingresso"
                required
                onChange={
                  (e) => { setPrice(e.target.value) }
                } />
            </div>
          </fieldset>

          <fieldset>
            <p>PASSO 3</p>
            <h2>Onde sera o evento?</h2>
            <div>
              <input
                type="text"
                value={est}
                placeholder=" Estado"
                required
                onChange={
                  (e) => { setEst(e.target.value) }
                } />
              <input
                type="text"
                value={city}
                placeholder="Cidade"
                required
                onChange={
                  (e) => { setCity(e.target.value) }
                } />
            </div>

            <button
              type="submit"
              disable={loading}>
              {loading ? 'Loading...' : 'Enviar'}
            </button>
            {isError && <small>Something went wrong. Please try again later.</small>}

          </fieldset>
        </form>
      </main>
      <Footer />
    </>
  )
}