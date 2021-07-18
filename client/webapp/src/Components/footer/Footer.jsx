import React from 'react'
import {Link} from 'react-router-dom'
import githubIcon from '../../assets/github.svg'
import logoFooter from '../../assets/logo_yellow.svg'
import './footer.scss'

export const Footer= ()=>{
    return(
    <footer>
        <section>
        <img src={logoFooter} alt="logo spacy"/>         
        <p>Spacy Inc. 2021 - &copy; All rights reserved</p>
        <nav>
           
            <Link to=""><img src={githubIcon} alt="icone instagram" /></Link>
            </nav>
        </section>
    </footer>
    )
}