import React,{ useContext } from 'react';
import agendaIcon from '../../assets/date.svg'
import cifraoIcon from '../../assets/cipher.svg'
import './result.scss'

export const Result= (props)=>{
    const Cadastrados = props.data
    const getCadastros= Cadastrados.map((el)=>{
        return(
            <article key={el.id}>

                <h2>{el.Nome}</h2>
                <h3>{el.Descrição}</h3>
                <address>{el.Estado} - {el.Cidade}</address>
                <br />
                <div>
                    <img src={agendaIcon} alt="icone agenda"/>
                    <time datatime={el.Data}>{el.Data}</time>
                    <img src={cifraoIcon} alt="icone cifrao"/>
                    <p>{el.Preço}</p> 
                </div>

                {/* <h2>{el.titulo}</h2>
                <h3>{el.subTitulo}</h3>
                <address>{el.endereco.rua} - {el.endereco.numero}</address>
                <address>{el.endereco.bairro} - {el.endereco.cidade}/{el.endereco.UF}</address>
                <br />
                <div>
                    <img src={agendaIcon} alt="icone agenda"/>
                    <time datatime={el.data}>{el.data}</time>
                    <img src={cifraoIcon} alt="icone cifrao"/>
                    <p>{el.valor}</p> 
                </div> */}
            </article>
        )
     })


     return (
        <section className="exibirResultados">
            <h3>{getCadastros.length} Resultado{getCadastros.length==0?'0':'s'} encontrado{getCadastros.length==0?'0':'s'}</h3>
            <div>{getCadastros}</div>
            
        </section>
     )
}