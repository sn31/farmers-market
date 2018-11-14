import React from 'react'
import PropTypes from 'prop-types'

function Produce(props) {
  let produceList =[]

  props.selection.map((produce)=>
    produceList.push(
      <p>{produce}</p>))
  return (
    <div>
      <h5>{props.month}</h5>
      <p>{produceList}</p>
    </div>
  )
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array,
}

export default Produce