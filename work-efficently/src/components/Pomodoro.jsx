import React, { useEffect, useRef, useState } from 'react';
import '../styles/Pomodoro.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Pomodoro() {
    const [workMinutes, setWorkMinutes] = useState(25);
    const [timeLeft, setTimeLeft] = useState(workMinutes * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [background, setBackground] = useState('pomodoro');
    const pomodoroRef = useRef(null);
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [isMinimized, setIsMinimized] = useState(false);

    useEffect(() => {
        setTimeLeft(workMinutes * 60);
    }, [workMinutes]);

    useEffect(() => {
        let timer;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (timeLeft === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);

    const formatTime = () => {
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    const handleMouseDown = (e) => {
        const rect = pomodoroRef.current.getBoundingClientRect();
        setDragging(true);
        setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseMove = (e) => {
        if (dragging) {
            pomodoroRef.current.style.left = `${e.clientX - offset.x}px`;
            pomodoroRef.current.style.top = `${e.clientY - offset.y}px`;
        }
    };

    const handleMouseUp = () => setDragging(false);

    const handleBackgroundChange = (e) => {
        const value = e.target.value;
        setBackground(value);
        document.body.className = `bg-${value}`;
    };

    useEffect(() => {
        document.body.classList.add('bg-pomodoro');
        return () => {
          document.body.classList.remove('bg-pomodoro');
        };
      }, []);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    });

    const toggleMinimize = () => {
        setIsMinimized((prev) => !prev);
    };

    return (
        <>
            <div className="bg-selector">
                <label>Background:</label>
                <select value={background} onChange={handleBackgroundChange}>
                    <option value="pomodoro">Default</option>
                    <option value="mountain">Mountain</option>
                    <option value="forest">Forest</option>
                    <option value="dark-forest">Dark Forest</option>
                    <option value="fireflies">Fireflies</option>
                    <option value="beach">Beach</option>
                </select>
            </div>

            <div
                className="pomodoro-container"
                ref={pomodoroRef}
                onMouseDown={handleMouseDown}
                style={{ position: 'absolute', cursor: 'move' }}
            >

                <div className='pomodoro-title'>
                    <h3>Pomodoro Timer</h3>
                    <button className="toggle-btn" onClick={toggleMinimize}>
                        {isMinimized ? <KeyboardArrowDownIcon style={{color:'black'}}/> : <KeyboardArrowUpIcon style={{color:'black'}}/>}
                    </button>
                </div>

                {!isMinimized && <div className="timer-input">
                    <label>Work Time (minutes)</label>
                    <input
                        type="number"
                        min="1"
                        value={workMinutes}
                        onChange={(e) => {
                            setIsRunning(false);
                            setWorkMinutes(Number(e.target.value));
                        }}
                    />
                </div>}

                <div className="timer-display">{formatTime()}</div>

                {!isMinimized && <div className="pomodoro-buttons">
                    <button onClick={() => setIsRunning(true)}>Start</button>
                    <button onClick={() => setIsRunning(false)}>Pause</button>
                    <button onClick={() => {
                        setIsRunning(false);
                        setTimeLeft(workMinutes * 60);
                    }}>Reset</button>
                </div>}
            </div>
        </>
    );
}
