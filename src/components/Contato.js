import React from 'react'

import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import Head from './Head'

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Dog  Contato" description="Contatos do site" />
      <img src={foto} alt="Máquina descrever"/>
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>furtado.pedropaulo@gmail.com</li>
          <li>99999-9999</li>
          <li>Carinha que mora logo ali</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
