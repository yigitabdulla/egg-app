import React from 'react'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CheckIcon from '@mui/icons-material/Check';
import "../styles/Stats.scss"

export default function Stats() {
  return (
    <div className='stats-container'>
        <h3 className='stats-title'>Stats</h3>
        <div className='stat'>
            <h4>Total Coin</h4>
            <span>🪙120</span>
        </div>
        <div className='stat'>
            <h4>Completed Objectives</h4>
            <span><CheckIcon/> 3</span>
        </div>
        <div className='stat'>
            <h4>Pomodoro Time</h4>
            <span><AccessTimeFilledIcon/> 1H 32M</span>
        </div>
    </div>
  )
}
