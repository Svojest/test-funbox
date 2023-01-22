import React from 'react'
import Card from '../Card/Card'
import './Cards.css'
import { data } from '../data'

const Cards = () => {
  const cards = data.map(prop => <Card key={prop.id} {...prop} />)
  return (
    <ul className='cards'>
      {cards}
    </ul>
  )
}

export default Cards