import React from 'react'

const Reloj = ({horario}) => {
  const [ciudad, hora] = horario
  return(
    <div className="reloj-container">
      <h3>{hora}</h3>
      <span>{ciudad}</span>
    </div>
  )
}

export default Reloj;
