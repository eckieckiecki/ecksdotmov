import React from 'react'
import './BootUp.css'
import logo from '../assets/icons/monitor.gif'

const PreLoader = ({ progress = 0 }) => {
  const complete = progress >= 100

  return (
    <div className={`loading${complete ? ' complete' : ''}`}>
      <div className="loading_elements" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: "center"
    }}>
        <img src={logo} className="monitor" alt="~X:/WEBSITE/ > BOOTING UP..." />
        <br></br>
        <div className="loading-bar-container" style={{
          width: 240,
          height: 18,
          background: '#222',
          borderRadius: 1,
          overflow: 'hidden',
          marginTop: 24,
          border: '6px solid #000',
          boxShadow: '0 0 0 2px white'

        }}>
          <div
            className="loading-bar"
            style={{
              display:'flex',margin: 0, width: `${progress}%`, height: '100%', background: `repeating-linear-gradient(
        90deg,
        #fff 0,
        #fff 20px,
        #000 20px,
        #000 32px
      )`,
      transition: 'width 0.1s linear',
    }}
          />
        </div>
      </div>
    </div>
  )
}

export default PreLoader