import React, { useState } from 'react'
import "../styles/Egg.scss"
import Pet from "./Pet"

export default function Egg() {

  const [activeTab, setActiveTab] = useState('egg');

  const toggleView = () => {
    setShowPet((prev) => !prev);
  };

  const tierColors = {
    regular: '#c4c4c4',
    rare: '#4aa4ff',
    epic: '#b84aff',
    legendary: '#ffd700',
  };

  const progress = 40

  return (
    <div className="egg-container">
      <div className="toggle-wrapper">
        <div className={`slider ${activeTab}`}></div>
        <button
          className={`toggle-btn ${activeTab === 'egg' ? 'active' : ''}`}
          onClick={() => setActiveTab('egg')}
        >
          Egg
        </button>
        <button
          className={`toggle-btn ${activeTab === 'pet' ? 'active' : ''}`}
          onClick={() => setActiveTab('pet')}
        >
          Pet
        </button>
      </div>

      {activeTab === 'egg' ? (
        <>
          <div className="egg-tier" style={{ color: '#cb4300' }}>Regular</div>
          <img className="egg-img" src="/rare-egg.png" alt="Egg" />
          <div className="progress-bar">
            <div className="progress-text" style={{
              color: progress > 50 ? 'whitesmoke' : 'black'
            }}>50%</div>
            <div className="progress" style={{ width: '90%', backgroundColor: '#cb4300' }}></div>
          </div>

        </>
      ) : (
        <>
          <Pet />
        </>
      )}
    </div>
  )
}
