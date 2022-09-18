import React from 'react'
import Nav from './components/Nav.tsx'
import data from './components/data.ts'
import SingleCard from './components/SignleCard.tsx'

export default function App() {
  const card = data.map(element => {
    return (
      <SingleCard
        item={element}
      />
    )
  }) 

  return (
    <div>
      <Nav />
      {card}
    </div>
  )
}