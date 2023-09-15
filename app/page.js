"Use client"
import React from "react";
import Link from "next/link"
import styles from './page.module.css'
//Toujours importer le Use Client
//page index de l'application
//import link permet de creer des lien sur nextJs



export default function Home() {
  return (
    <main className={styles.main}>

   <Link href="/">Home</Link>
   <Link href="/cv">CV</Link>
   <Link href="/contact">Contact</Link>
   <Link href="/jeu">Jeu</Link>
   <Link href="/testApi">api</Link>

    </main>
  )
}
