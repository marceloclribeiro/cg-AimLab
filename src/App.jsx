import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Crosshair, CustomPointerLockControls, Plane, RenderTargets, Audio } from './components'

import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [start, setStart] = useState(false)
  const [sense, setSense] = useState(0.5)
  const [gamemode, setGamemode] = useState('steady')
  const [precision, setPrecision] = useState()

  const reset = () => {
    setPrecision(Math.round(((score + 1) / (clicks + 1)) * 100))
    setScore(0)
    setClicks(0)
    setStart(false)
  }

  useEffect(() => {
    const savedSense = localStorage.getItem('sense')
    savedSense && setSense(savedSense)
  }, [])
  return (
    <div>
      {start ? (
        <div className="infos">
          <h1>Remaining:{5 - score}</h1>
          <button
            onClick={() => {
              setStart(false)
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="menu">
          <div>{precision && <h1>Precision: {precision}%</h1>}</div>
          <div>
            <h1>Aim Lab</h1>
            <button
              onClick={() => {
                setStart(true)
                setPrecision()
              }}
            >
              Start
            </button>
            <h3>Mouse sensibility</h3>
            <input
              type="range"
              min="0.05"
              max="1"
              value={sense}
              step="0.05"
              onChange={(event) => {
                setSense(event.target.value)
                localStorage.setItem('sense', event.target.value)
              }}
            />
            <p>{sense}</p>
            <select value={gamemode} onChange={(event) => setGamemode(event.target.value)}>
              <option value="steady">Steady</option>
              <option value="horizontal">Horizontal</option>
              <option value="random">Random</option>
            </select>
          </div>
          <div></div>
        </div>
      )}
      {start && <Crosshair />}
      <Canvas onClick={() => start && setClicks((prev) => prev + 1)}>
        <Audio path={'sounds/pew.mp3'} clicks={clicks} />
        {start ? <CustomPointerLockControls pointerSpeed={sense} /> : <PerspectiveCamera />}

        <Plane />
        <RenderTargets score={score} setScore={setScore} start={start} reset={reset} gamemode={gamemode} />
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 30, 0]} intensity={1} castShadow />
      </Canvas>
    </div>
  )
}

export default App
