import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './menu.scss'

export const Menu= ()=>{

    return(
        <>
          <header>
              <section>
                  <div className="logo">
                      <img src={logo} alt="Logo spacy" />
                  </div>
                  <nav>
                      <ul> 
                          <li><Link to="/" className="link a">Eventos</Link></li>
                          <li><Link to="/novoevento" className="link b">Novo evento</Link></li>
                      </ul>
                  </nav>
              </section>
          </header>
        </>
    )
}