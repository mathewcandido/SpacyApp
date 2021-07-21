import React, { useContext } from 'react';
import agendaIcon from '../../assets/date.svg'
import cifraoIcon from '../../assets/cipher.svg'
import './result.scss'

export const Result = (props) => {
    const ele = props.res;
    return (
        
            <article key={ele.id}>

                <h2>{ele.Nome}</h2>
                <h3>{ele.Descrição}</h3>
                <address>{ele.Estado} - {ele.Cidade}</address>
                <br />
                <div>
                    <img src={agendaIcon} alt="icone agenda" />
                    <time datatime={ele.Data}>{ele.Data}</time>
                    <img src={cifraoIcon} alt="icone cifrao" />
                    <p>{ele.Preço}</p>
                </div>


            </article>
      
    )
}
{/*    return (
        <section className="exibirResultados">
            <h3>{getCadastros.length} Resultado{getCadastros.length == 0 ? '0' : 's'} encontrado{getCadastros.length == 0 ? '0' : 's'}</h3>
            <div>{getCadastros}</div>

        </section>


    )

}*/}