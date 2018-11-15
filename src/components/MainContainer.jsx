import React from 'react'
import ScheduleList from './ScheduleList'
import ProduceList from './ProduceList'
import {Switch, Route} from 'react-router-dom'

function MainContainer() {
  return (
    <div style={{marginTop: '2em'}}>
      <Switch>
        <Route path='/schedule' component ={ScheduleList}></Route>
        <Route path='/produce' component ={ProduceList}></Route>
      </Switch>
    </div>
  )
}

export default MainContainer
