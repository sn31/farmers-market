import React from "react";
import ScheduleList from "./ScheduleList";
import ProduceList from "./ProduceList";

function MainContainer() {
  return (
    <div style={{marginTop: '2em'}}>
      <div id="schedule">
        <ScheduleList />
      </div>
      <div id="produce">
        <ProduceList />
      </div>
      <style jsx>{`
      #schedule {
          width: 30%;
          float: left;
          clear: both;
         
      }
      #produce {
        width: 69.9%;
        float: right;
        border-left: 1px solid black;
    }

      `}</style>
    </div>
  );
}

export default MainContainer;
