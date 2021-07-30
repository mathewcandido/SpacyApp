import React, { createContext, useState } from 'react';
import agendaIcon from '../../assets/date.svg'
import cifraoIcon from '../../assets/cipher.svg'
import './result.scss'
import axios from "axios";
import { Editar } from '../../pages/Edite';
import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import Datacontext from './Contexto';
// Component Result..............................................


function alertanimation() {

    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Evento Deletado com sucesso ',
        showConfirmButton: false,
        timer: 1500
    })
}

//passando o valor para o edite e chamando o component OK 
export const Result = (props) => {



    const editepath = (el) => {

        <Editar />

        console.log(el)
    }



    const [del, setDell] = useState(props.api)
    //aqui eu peguei o evento settado pois não daria para passar uma função dentro do useEffect
    React.useEffect(() => {
        setDell(props.api)

    }, [props.api])

    const deleting = (el) => {
        //criei uma const recebendo o parametro el para usa-la no filter 

        const deletedEvent = el
        axios.delete(`http://localhost:8080/Eventos/${el.id}`)
            .then((response) => {
                //aqui estou fazendo um filter para renderizar sem os item que já foram exluidos 
             setDell(del.filter(item => item.id !== deletedEvent.id))

            }).catch(() => {
                console.log(Error)
            })
    }


    console.log(del)
    const EventosCadastrados = del
    //>>>>>>>>>>>>            FILTER          >>>>>>>>>>>>>>>>>>>>>>>>>>>
    const selectState = EventosCadastrados.filter((element) => {

        return element.Estado === props.estados
    }).map((el) => {
        return (
            <article key={el.id}  >
                <h2>{el.Nome}</h2>
                <h3>{el.Descrição}</h3>
                <address id={el.Estado}>{el.Estado} - {el.Cidade}</address>
                <br />
                <div>
                    <img src={agendaIcon} alt="icone agenda" />
                    <time datatime={el.Data}>{el.Data}</time>
                    <img src={cifraoIcon} alt="icone cifrao" />
                    <p>{el.Preço}</p>
                </div>
            </article>
        )
    })

    // >>>>>>>>>>>>>>>>>>>>>............ BUSCA ........>>>>>>>>>>>>>>>>

    const getSearch = EventosCadastrados.filter((element) => {
        if (element.Nome.toLowerCase().includes(props.busca.toLowerCase()) ||
            element.Descrição.toLowerCase().includes(props.busca.toLowerCase())) {
            return element
        }
    }).map((el) => {
        return (
            <article key={el.id} >
                {console.log(el.id)}
                <h2>{el.Nome}</h2>
                <h3>{el.Descrição}</h3>
                <address id={el.Estado}>{el.Estado} - {el.Cidade}</address>
                <br />
                <div>
                    <img src={agendaIcon} alt="icone agenda" />
                    <time datatime={el.Data}>{el.Data}</time>
                    <img src={cifraoIcon} alt="icone cifrao" />
                    <p>{el.Preço}</p>
                    <div>
                        <button onClick={() => deleting(el) || alertanimation()}>Delete</button>

                        <button onClick={() => editepath(el)}><Link to={`/editar/${el.id}`}>Editar</Link></button>
                    </div>
                </div>
            </article>
        )
    })

    const views = () => {
        if (selectState == "") {
            return getSearch
        }
        else {
            return selectState
        }
    }


    return (
        <>

            <section className="exibirResultados">

                <h3>{views().length ?
                    `${views().length} Eventos encontrados` :
                    `${views().length} Evento encontrado`}
                </h3>

                <div>
                    {views()}
                </div>



            </section>
        </>
    )
}