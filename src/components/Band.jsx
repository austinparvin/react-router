import React from 'react'

const Band = ({ name, img, desc }) => {
  return (
    <div class="band">
      <h1>{name}</h1>
      <img src={img} width="100" />
      <p>{desc}</p>
    </div>
  )
}

export default Band
