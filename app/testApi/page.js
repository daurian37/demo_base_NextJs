"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

//lien Api: https://dumbstockapi.com/stock?exchanges=NYSE

//pour integrer une api externe on sdoit installer une librairie >npm install axios 

const useClient = true;

const Api = () => {

// pour contenir les données a afficher on a besoin d'une variable donc un state 
//c'est dans cette var que sera stocké les différentes données que l'on va récupérer

    const [data, setData] =  useState(null)

// le stateLoading nous permettra de connaitre si on est entrain de charger quelques chose ou pas 
//par defaut on va mettre la valeure a vrai

    const [loading, setLoading] = useState(true)

//on va maintenant faire un useEffect pour dire qu'on va faire quelque chose au chargement de la page
//une fois que le composant sera chargé on va interroger l'Api et récupérer les datas

    useEffect(() => {
            //on va utiliser une fction async pour récuperer les datas

            const fetchData = async() => {

                try {
                        const response = await axios.get('https://dumbstockapi.com/stock?exchanges=NYSE')
                        setData(response.data)
                        setLoading(false)
                } catch(error){
                    console.log(error)
                    setLoading(false)
                }
            }

            //et ensuite exécuter la fonction
            fetchData()

            //facultatif
            return () => {

                //Nettoyage au demontage du composant
                //cancelRequest()
            }
    }, [])

  return (
    <div>
    {loading ? (
      <p>Chargement...</p>
    ) : (
      <div>
        <p>Données récupérées avec succès !</p>
        {/* Affichage des données */}
        <ul>
          {data.map((item) => (
            <li key={item.ticker}>
              {item.name} - {item.exchange}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
  )
}

export default Api