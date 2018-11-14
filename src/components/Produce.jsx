import React from 'react'
import PropTypes from 'prop-types'

function Produce(props) {
  let produceList =[]

  props.selection.map((produce, index)=>
    produceList.push(
      <span key={index}>{produce}&nbsp;&nbsp;</span>))
  return (
    <div>
      <h5 style={{color: '#477537'}}>{props.month}</h5>
      <p>{produceList}</p><hr/>
    </div>
  )
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array,
}

export default Produce