import React, { useEffect, useRef, useState } from 'react'
import "./BootUp.css"
import logo from '../assets/icons/monitor.gif'

const PreLoader = () => {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    let startTimeout = setTimeout(() => {
      let start = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - start;
        const percent = Math.min((elapsed / 4400) * 100, 100);
        setProgress(percent);
        if (percent === 100) {
          clearInterval(intervalRef.current);
          setTimeout(() => setProgress(100), 500); 
        }
      }, 30);
    }, 300);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="loading">
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
          overflow: "hidden",
          marginTop: 24,
          border: "6px solid #000",
          boxShadow: '0 0 0 2px white'

        }}>
          <div
            className="loading-bar"
            style={{
              display:"flex",margin: 0, width: `${progress}%`, height: "100%", background: `repeating-linear-gradient(
        90deg,
        #fff 0,
        #fff 20px,
        #000 20px,
        #000 32px
      )`,
      transition: "width 0.1s linear",
    }}
          />
        </div>
      </div>
    </div>
  );
}

export default PreLoader