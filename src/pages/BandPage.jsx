import React from 'react'
import Band from '../components/Band'
import bands from '../data/bands.json'

const BandPage = (props) => {
  const bandId = props.match.params.id
  const bandData = bands[bandId]

  return <Band name={bandData.name} img={bandData.img} desc={bandData.desc} />
}

export default BandPage
