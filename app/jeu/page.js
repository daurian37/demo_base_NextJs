"use client"
import React, { useEffect, useState } from 'react';

// Utilisez "useClient" ou la méthode spécifique de votre cadre pour marquer ce composant comme un "Client Component".
// Toujours utiliser client component quand l'utilisateur doit interagir sur la page avec le navigateur
const useClient = true;

const Jeu = () => {
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    setNumber(number + 1);
  };


  const decrementNumber = () => {
    setNumber(number - 1);
  };

  //Avec useEffet on peut preciser ce qui doit etre fait apres que la page soit chargé en précisant des dépendance après le chargement de la page
  //avant que l'utilisateur clique sur OK lors du message d'alerte le contnu de la page n'est pas prise en compte sur la console
  // les useEffect permet egalement d'integrer des API externe
  //e.g

 /* useEffect(() => {

    //quand number change affiche un message à la console
    //quand le tableau [] est vide c'est toute la page qui est concerné par le useEffect
    console.log('Le nombre a changer')
  }, [number])

  */

  //e.g integration d'une API externe

  useEffect(() => {

    //quand number change affiche un message à la console
    //quand le tableau [] est vide c'est toute la page qui est concerné par le useEffect
    console.log('Le nombre a changer')
  }, [number])

  return (
    <>
      <p>{number}</p>
      <button onClick={() => incrementNumber()}>Incrémenter</button>
      <button onClick={() => decrementNumber()}>décrimenter</button>
    </>
  );
};

export default Jeu;
