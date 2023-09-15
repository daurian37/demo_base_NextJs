import React from 'react'

                       //LES PROPS
// en React les props(propriétes) sont des params passé à un composant pour lui fournir des donnees ou des fonctionnalites specifiques
//ils sont utilisés pour transmettre des valeures d'un composant parent à un composant enfant

// ici ce composant va récupérer les informations d'un autre compoant à savoir: le title
// l'objectif est d'afficher ce component dirrectement dans cv

const NouveauCv = ({title}) => {
    
  return (
    <div>{title}</div>
  )
}

export default NouveauCv