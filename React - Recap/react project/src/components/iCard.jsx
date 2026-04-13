import React from 'react'
import './icard.css'

function ICard(props) {
  return (
    <div className="container">
      <h1>ICard</h1>

      <h2>ID: {props.id}</h2>
      <h2>Name: {props.name}</h2>
      <h2>Branch: {props.branch}</h2>
      <h2>Section: {props.section}</h2>
    </div>
  )
}

export default ICard
