import React, { useState, useEffect } from 'react';
import { Menu } from '../Components/Menu/Menu.jsx';
import { Result } from '../Components/result/Result.jsx';
import { Footer } from '../Components/footer/Footer.jsx';
import axios from "axios";
import './home.scss';
//  Import IMAGE
import details from '../assets/Details.png'
import searchIcon from '../assets/search.svg'
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

    return (
        <>
            <Menu />
            <section className="content" style={bgImage}>
                <article>
                    <section className="contentTitle">
                        <h1>Todos os eventos de tecnologia<br />reunidos em um só lugar.</h1>
                        <button><a href="#busca">Buscar Evento</a></button>
                    </section>
                </article>
            </section>

            <section className="contentForm" id="busca" >
                <form>
                    <h2>Filtros</h2>
                    <ul>
                        <li>
                            <input type="search" name="search" id="search" placeholder="Busca" />
                            <button>
                                <img src={searchIcon} alt="Botão de busca" />
                            </button>
                        </li>
                        <li>
                            <select name="cidade" id="cidade" style={seta}>
                                <option >Selecione uma Cidade</option>
                                <option value="Blumenau">Navegantes</option>
                                <option value="Blumenau">Blumenau</option>
                                <option value="Blumenau">Blumenau</option>
                                <option value="Blumenau">Blumenau</option>
                            </select>
                        </li>
                        <li>
                            <select name="estado" id="estado" style={seta} >
                                <option >Selecione um Estado</option>
                                <option value="Santa Catarina">Santa Catarina</option>
                                <option value="Rio de Janeiro">Rio de Janeiro</option>
                                <option value="São Paulo">São Paulo</option>
                                <option value="Minas Gerais">Minas Gerais</option>
                            </select>
                        </li>
                    </ul>
                </form>
            </section>

            <main className="contentMain">

                <Result data={eventos} />

            </main>
            <Footer />
        </>
    )
}