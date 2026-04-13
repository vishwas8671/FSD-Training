import React from 'react'
import './ICard.css'

function ICard({data}) {
  return (
    <div className='border-2  bg-amber-200 '>
      <h2>ID : {data.id}</h2>
      <h2>Name : {data.name}</h2>
      <h2>Branch : {data.branch}</h2>
    </div>
  )
}

export default ICard