
import React from 'react'

function Card({name,contact,fn}) {
  return (
    <div>
        <h4>{name}</h4>
        <h5>{contact}</h5>
        <button>X</button>
    </div>
  )
}

export default Card