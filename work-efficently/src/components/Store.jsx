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
        <img src="/regular-egg.png" alt="" />
        <div className='egg-price'><p className='coin'>🪙</p><p>100</p></div>
        <button className='buy-button'>Buy</button>
      </div>
      <div className="egg-container">
        <p className='egg-title'>Rare Egg</p>
        <img src="/rare-egg.png" alt="" />
        <div className='egg-price'><p className='coin'>🪙</p><p>300</p></div>
        <button className='buy-button'>Buy</button>
      </div>
      <div className="egg-container">
        <p className='egg-title'>Legendary Egg</p>
        <img src="/legendary-egg.png" alt="" />
        <div className='egg-price'><p className='coin'>🪙</p><p>600</p></div>
        <button className='buy-button'>Buy</button>
      </div>
      <div className="egg-container">
        <p className='egg-title'>Godly Egg</p>
        <img src="/godly-egg.png" alt="" />
        <div className='egg-price'><p className='coin'>🪙</p><p>900</p></div>
        <button className='buy-button'>Buy</button>
      </div>
    </div>
  )
}
