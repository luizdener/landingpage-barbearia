'use client'
import { useState } from 'react'

import styles from './Topo.module.scss'

import Image from 'next/image'
import Logo from '/public/barbearia-logo.png'
import Sol from '/public/sun.png'
import Lua from '/public/moon.png'

export default function Topo({estilo, onEstiloChange}){

    const [imagem, setImagem] = useState(Sol)

    function mudarEstilo (){
        estilo == 'Light' ? onEstiloChange('Dark') : onEstiloChange('Light')
        estilo == 'Light' ? setImagem(Lua) : setImagem(Sol)
    }

    return(
        <header className={`${styles.topo} ${estilo === 'Dark' ? styles.darkMode : styles.topo}`}>
            <div className={`limited-width ${styles['limited-width']}`}>
                <Image className={styles.logo} src={Logo}/>

                <button onClick={mudarEstilo}>
                    <Image src={imagem}/>
                    {estilo}
                </button>
            </div>
        </header>
    )
}