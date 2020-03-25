import React from 'react'
import Band from '../components/Band'
import NirvanaPic from '../images/nirvana.jpg'

const Band1 = () => {
  return (
    <Band
      name="Nirvana"
      img={NirvanaPic}
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vitae dolorum temporibus magnam, minus, vel quaerat blanditiis nisi dolore tenetur quis quae itaque expedita voluptates eum id. Quas, necessitatibus debitis!"
    />
  )
}

export default Band1
