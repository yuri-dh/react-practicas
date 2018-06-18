import React from 'react'
import PropTypes from 'prop-types';

const Reloj = ({horario}) => {
  const [ciudad, hora] = horario
  return(
    <div className="reloj-container">
      <h3>{hora}</h3>
      <span>{ciudad}</span>
    </div>
  )
}

Reloj.propTypes = {
	horario: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Reloj;
