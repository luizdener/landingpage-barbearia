'use client'
import { useState } from "react";


import styles from "./page.module.scss";
import Topo from "@/components/topo/Topo";

export default function Home() {

  const [estilo, setEstilo] = useState('Light')

  function mudarEstilo(novoEstilo){
    setEstilo(novoEstilo)
  }

  return (
    <main className={`${styles['home']} ${estilo === 'Dark' ? styles.darkMode : styles.home}`}>
      <Topo estilo={estilo} onEstiloChange={mudarEstilo}/>

      <section className={styles.banner}/>

      <section className={`limited-width ${styles['limited-width']}`}>
        <h1>Bem-vindo a Barber Shop</h1>
        <p className={styles.destaque}>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
        <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
        <p className={`${styles['autografo']}`}>S. Kelly</p>
      </section>
    </main>
  );
}
