import React from 'react'
import PropTypes from 'prop-types'

function Produce(props) {
  let produceList =[]

  props.selection.map((produce, index)=>
    produceList.push(
      <li key={index}>{produce}</li>))
  return (
    <div>
      <h5>{props.month}</h5>
      <ul>{produceList}</ul>
    </div>
  )
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array,
}

export default Produce