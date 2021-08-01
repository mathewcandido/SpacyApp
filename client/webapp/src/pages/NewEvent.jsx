import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Menu } from '../Components/Menu/Menu.jsx'
import { Footer } from '../Components/footer/Footer.jsx'
import './newevent.scss'
import Swal from 'sweetalert2'
import { useHistory, useParams } from 'react-router-dom';
import Input from "react-input-mask";
import {  CoffeeLoading } from 'react-loadingg';


function alertanimation() {

  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Evento Salvo com Sucesso',
    showConfirmButton: false,
    timer: 1500
  })
}
const initialValue = {
  Nome: '',
  Estado: '',
  Preço: '0',
  Cidade: '',
  Descrição: '',
  Data: ''
}

export const NewEvent = () => {
  const { id } = useParams()

  const [values, setValues] = useState(id ? null : initialValue);
  const history = useHistory();
  console.log(id)
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/Eventos/${id}`)
        .then((response) => {
          console.log(response.data);
          setValues(response.data);
        })
    }
  }, [id]);

  function onChange(ev) {
    const { name, value } = ev.target;
    setValues({ ...values, [name]: value });
  }


  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  const handleSubmit = (e) => {
    alertanimation()
    e.preventDefault()
    setLoading(true);
    setIsError(false);
    console.log(values);
    const method = id ? 'put' : 'post';
    const url = id ? `http://localhost:8080/Eventos/${id}` : `http://localhost:8080/Eventos`
    axios[method](url, values)
      .then((response) => {
        setTimeout(() => {

          history.push('/');
        }, 500);

      });


  }
  return (
    <>
      <Menu />
      <main className="container">
        {!values ? (
          <div className="looping"><  CoffeeLoading  /></div>
        ) : (
          <form
            action=""
            method="post"
            onSubmit={handleSubmit}>
            <fieldset>
              <p>PASSO 1</p>
              <h2>Conte um pouco sobre seu evento</h2>
              <input

                type="text"
                id="Nome"
                value={values.Nome}
                name="Nome"
                placeholder="Título do evento"
                required
                onChange={onChange} />
              <textarea
                value={values.Descrição}
                id="Descrição"
                name="Descrição"
                placeholder="Descrição do evento"
                maxLength="100"
                required
                onChange={onChange} />

            </fieldset>

            <fieldset>
              <p>PASSO 2</p>
              <h2>Quando será e quanto custará o ingresso?</h2>
              <div>
                <Input
                  type="data"
                  guide={false}
                  name="Data"
                  id="Data"
                  showMask={false}
                  mask="99/99/9999"
                  value={values.Data}
                  placeholder="Data do evento"
                  required
                  onChange={onChange}
                />

                <input
                  type="number"
                  name="Preço"
                  id="Preço"
                  value={values.Preço}
                  placeholder="Valor do ingresso"
                  required
                  onChange={onChange} />
              </div>
            </fieldset>

            <fieldset>
              <p>PASSO 3</p>
              <h2>Onde sera o evento?</h2>
              <div>
                <input
                  type="text"
                  name="Estado"
                  id="Estado"
                  value={values.Estado}
                  placeholder=" Estado"
                  required
                  onChange={onChange} />
                <input
                  type="text"
                  name="Cidade"
                  id="Cidade"
                  value={values.Cidade}
                  placeholder="Cidade"
                  required
                  onChange={onChange} />
              </div>

              <button
                type="submit"
                disable={loading}>
                {loading ? 'Loading...' : 'Enviar'}
              </button>
              {isError && <small>Something went wrong. Please try again later.</small>}

            </fieldset>
          </form>
        )}
      </main>
      <Footer />
    </>
  )
}