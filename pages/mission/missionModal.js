import React from 'react'
import './missionEnd';
import './missionRetry';
import './missionSucess';

const mission = () => {
  return (
    <div>mission
      <MissionSucess />
      <MissionRetry />
      <MissionEnd />    
    </div>
  )
}

export default mission

