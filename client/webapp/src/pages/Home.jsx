import React, { useState, useEffect, useRef } from 'react';
import { Menu } from '../Components/Menu/Menu.jsx';
import { Footer } from '../Components/footer/Footer.jsx';
import axios from "axios";
import { Result } from '../Components/result/Result.jsx';
import './home.scss';
//  Import IMAGE
import details from '../assets/Details.png'
import searchIcons from '../assets/search.svg'
import setaIcon from '../assets/seta.svg'



export const Home = () => {

    // get API  
    const [eventos, setEventos] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/Eventos")
            .then((response) => {
                setEventos(
                    response.data
                )
            }).catch(() => {
                console.log(Error)
            })

    }, [])



    const seta = {
        backgroundImage: `url(${setaIcon})`,
        backgroundPosition: '97% 50%',
        backgroundSize: '12px',
        backgroundRepeat: 'no-repeat',
    }
    const bgImage = {
        backgroundImage: `url(${details})`,
        backgroundPosition: 'right',
        backgroundPositionY: '100px',
        backgroundOrigin: 'border-box',
        backgroundSize: '20rem 37rem',
        backgroundRepeat: 'no-repeat',
    }
    // select Estado
    const [selectEstado, setSelectEstado] = useState('Selecione uma cidade')
    const handleSelectEstado = (e) => {
        setSelectEstado(e.target.value)
    }
    const estado = eventos
    const listEstado = estado.map((item) => {
        return (
            <option value={item.Estado} key={item.id}>{item.Estado}</option>
        )
    })

    // Busca
    const [busca, setBusca] = useState('')
    const handleBusca = (e) => {
        setBusca(e.target.value)
    }

    return (
        <>
            <Menu />
            <section className="content" style={bgImage} >
                <article>
                    <section className="contentTitle">
                        <h1>Todos os eventos de tecnologia<br />reunidos em um só lugar.</h1>
                        <button><a href="#busca">Buscar Evento</a></button>
                    </section>
                </article>
            </section>

            <section className="contentForm" id="busca">
                <form >
                    <h2>Filtros</h2>
                    <ul>
                        <li>
                            <input
                                type="search"
                               
                                autocomplete="off"
                                value={busca}
                                id="search"
                                placeholder="Busca"
                                onChange={handleBusca} />
                            <button disabled >
                                <img src={searchIcons} alt="Botão de busca" />
                            </button>
                        </li>
                        <li>
                            <select
                                style={seta}
                                value={selectEstado}
                                onChange={handleSelectEstado}>
                                <option
                                    disable="true"
                                    value>Selecione um Estado
                                </option>
                                {listEstado}
                            </select>
                        </li>
                    </ul>
                </form>
            </section>

            <main className="contentMain">
                <Result
                    api={eventos}
                    busca={busca}
                    estados={selectEstado} />
            </main>
            <Footer />
        </>
    )
}