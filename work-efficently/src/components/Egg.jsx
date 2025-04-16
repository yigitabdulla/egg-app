import React from 'react'
import "../styles/Egg.scss"

export default function Egg() {

    const tierColors = {
        regular: '#c4c4c4',
        rare: '#4aa4ff',
        epic: '#b84aff',
        legendary: '#ffd700',
    };

    const color = '#cb4300';

    return (
        <div className='egg-container'>
            <div className="egg-tier" style={{ color }}>
                Regular
            </div>
            <img className='egg-img' src="/egg.png" alt="" />
            <div className="progress-bar">
                <div
                    className="progress"
                    style={{
                        width: `${Math.min(50, 100)}%`,
                        backgroundColor: '#cb4300',
                    }}
                >50%</div>
            </div>
        </div>
    )
}
