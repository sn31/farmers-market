import React from 'react'
import ScheduleList from './ScheduleList'
import ProduceList from './ProduceList'

function MainContainer() {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <ScheduleList />
          </td>
        </tr>
        <tr>
          <td>
            <ProduceList />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default MainContainer
