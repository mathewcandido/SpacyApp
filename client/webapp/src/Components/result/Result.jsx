import React from 'react';
import agendaIcon from '../../assets/date.svg'
import cifraoIcon from '../../assets/cipher.svg'
import './result.scss'

// Component Result..............................................
export const Result= (props)=>{
    
    const EventosCadastrados = props.api   

//>>>>>>>>>>>>            FILTER          >>>>>>>>>>>>>>>>>>>>>>>>>>>
    const selectState= EventosCadastrados.filter((el)=>{
            return el.Estado === props.estados 
    }).map((el)=>{
        return(
                <article key={el.id}>
                    <h2>{el.Nome}</h2>
                    <h3>{el.Descrição}</h3>
                    <address id={el.Estado}>{el.Estado} - {el.Cidade}</address>
                    <br />
                    <div>
                        <img src={agendaIcon} alt="icone agenda"/>
                        <time datatime={el.Data}>{el.Data}</time>
                        <img src={cifraoIcon} alt="icone cifrao"/>
                        <p>{el.Preço}</p> 
                    </div>
                </article>
        )
    })  

// >>>>>>>>>>>>>>>>>>>>>............ BUSCA ........>>>>>>>>>>>>>>>>
   
   const getSearch= EventosCadastrados.filter((el) => { 
          if(el.Nome.toLowerCase().includes(props.busca.toLowerCase()) || 
                el.Descrição.toLowerCase().includes(props.busca.toLowerCase())){
             return el
           }
    }).map((el)=>{
            return(
                <article key={el.id}>
                    <h2>{el.Nome}</h2>
                    <h3>{el.Descrição}</h3>
                    <address id={el.Estado}>{el.Estado} - {el.Cidade}</address>
                    <br />
                    <div>
                        <img src={agendaIcon} alt="icone agenda"/>
                        <time datatime={el.Data}>{el.Data}</time>
                        <img src={cifraoIcon} alt="icone cifrao"/>
                        <p>{el.Preço}</p> 
                    </div>
                </article>
            )
         })
 
    const views= ()=>{
       if(selectState == ""){
           return getSearch
       }
       else{
           return selectState
       }
    }


return (
    <section className="exibirResultados">

    <h3>{ views().length ?
     `${views().length} Eventos encontrados` :
     `${views().length} Evento encontrado`}
    </h3>

    <div>{views()}</div>   

    </section>
    )
}