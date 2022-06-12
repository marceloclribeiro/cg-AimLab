import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import './App.css'

import { Crosshair, CustomPointerLockControls, Plane, RenderTargets, Audio } from './components'

function App() {
  const [score, setScore] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [start, setStart] = useState(false)
  const [sense, setSense] = useState(0.5)
  const [gamemode, setGamemode] = useState('steady')

  const camera = useRef()
  return (
    <>
      {start ? (
        <div className="infos">
          <h1>Clicks:{clicks}</h1>
          <h1>Precision:{Math.round((score / clicks) * 100)}%</h1>
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
          <h1>Aim Lab</h1>
          <button
            onClick={() => {
              setStart(true)
            }}
          >
            Start
          </button>
          <input
            type="range"
            min="0"
            max="1"
            value={sense}
            step="0.05"
            onChange={(event) => setSense(event.target.value)}
          />
          <select value={gamemode} onChange={(event) => setGamemode(event.target.value)}>
            <option value="steady">Steady</option>
            <option value="horizontal">Horizontal</option>
            <option value="random">Random</option>
          </select>
          <p>{sense}</p>
        </div>
      )}
      {start && <Crosshair />}
      <Canvas onClick={() => start && setClicks((prev) => prev + 1)}>
        <Suspense>{clicks && <Audio path={'sounds/pew.mp3'} clicks={clicks} start={start} />}</Suspense>
        {start ? <CustomPointerLockControls pointerSpeed={sense} ref={camera} /> : <PerspectiveCamera />}

        <Plane />
        <RenderTargets score={score} setScore={setScore} start={start} setStart={setStart} gamemode={gamemode} />
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 30, 0]} intensity={1} castShadow />
      </Canvas>
    </>
  )
}

export default App
