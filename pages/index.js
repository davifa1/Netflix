import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div className={styles.main}>
       <header>
         <h1>NETFLIX</h1>

         <button>Entrar</button>
       </header>
       <div className={styles.Center}>
         <h1>Filmes, Series e muito mais.
           Sem limites.
         </h1>

         <h3>Assista onde quiser.Cancele quando quiser.</h3>

         <div className={styles.form}>
           <p>Novo Por Aqui? Começe assistir hoje mesmo digitando seu E-mail.</p>
           <div className={styles.item_o}>
           <input placeholder="Digite seu e-mail"/>
           <button>Vamos Lá</button>
           </div>
         </div>
       </div>
     </div>
    </div>
  )
}
