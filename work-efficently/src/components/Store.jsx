import React, { useEffect } from 'react'
import "../styles/Store.scss"

export default function Store() {

  useEffect(() => {
    document.body.classList.add('store-bg');
    return () => {
      document.body.classList.remove('store-bg');
    };
  }, []);

  return (
    <div className='store-container'>
      <div className="egg-container">
        <p className='egg-title'>Regular Egg</p>
        <img src="/rare-egg.png" alt="" />
        <p className='egg-price'>🪙100</p>
        <button className='buy-button'>Buy</button>
      </div>
      <div className="egg-container">
        <p className='egg-title'>Rare Egg</p>
        <img src="/rare-egg.png" alt="" />
        <p className='egg-price'>🪙100</p>
        <button className='buy-button'>Buy</button>
      </div>
      <div className="egg-container">
        <p className='egg-title'>Legendary Egg</p>
        <img src="/rare-egg.png" alt="" />
        <p className='egg-price'>🪙100</p>
        <button className='buy-button'>Buy</button>
      </div>
      <div className="egg-container">
        <p className='egg-title'>Godly Egg</p>
        <img src="/rare-egg.png" alt="" />
        <p className='egg-price'>🪙100</p>
        <button className='buy-button'>Buy</button>
      </div>
    </div>
  )
}
