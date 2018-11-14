import React from 'react'
import PropTypes from 'prop-types'

function Schedule(props) {
  return(
    <div>
      <h4 style={{color: '#561337'}}>{props.day}</h4>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
      <hr/>
    </div>
  )

}

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
}

export default Schedule