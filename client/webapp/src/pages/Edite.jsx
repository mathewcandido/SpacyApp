import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Menu } from '../Components/Menu/Menu.jsx'
import { Footer } from '../Components/footer/Footer.jsx'
import './newevent.scss'
import Swal from 'sweetalert2'
import { useHistory, useParams } from 'react-router-dom';
import Input from "react-input-mask";



function alertanimation() {


    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Evento Salvo com Sucesso',
        showConfirmButton: false,
        timer: 1500
    })
}

export const Editar = () => {
    //settandos inputs

    const [anypath, setAnypath] = useState()
    const [name, setName] = useState('');
    const [est, setEst] = useState('');
    const [city, setCity] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [updatedAt, setUpdatedAt] = useState(null);
    const [dates, setDates] = useState('');
    const { id } = useParams()

    axios.get(`http://localhost:8080/Eventos/${id}`)
        .then((response) => {
            setName(response.data.Nome)
            setDates(response.data.Data)
            setDesc(response.data.Descrição)
            setEst(response.data.Estado)
            setCity(response.data.Cidade)
            setPrice(response.data.Preço)
        }).catch(() => {
            console.log(Error)
        })


    const history = useHistory();
    const routChange = () => {

        let path = '/'
        setTimeout(() => {
            history.push(path)
        }, 3000);


    }

    const handleSubmit = (e) => {
        setAnypath(routChange)
        alertanimation()
        e.preventDefault()
        setLoading(true);
        setIsError(false);

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
                            <Input
                                type="data"
                                guide={false}
                                showMask={false}
                                mask="99/99/9999"
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