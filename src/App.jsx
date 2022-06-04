import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import './App.css'

import { Crosshair, CustomPointerLockControls, Plane, RenderTargets, Audio } from './components'

function App() {
  const [score, setScore] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [start, setStart] = useState(false)

  const camera = useRef()
  return (
    <>
      <div className="infos">
        <h1>Clicks:{clicks}</h1>
        <button
          onClick={() => {
            setStart((prev) => !prev)
            // camera.current.lock()
          }}
        >
          Start
        </button>
      </div>
      {start && <Crosshair />}
      <Canvas onClick={() => start && setClicks((prev) => prev + 1)}>
        <Suspense>
          <Audio clicks={clicks} start={start} />
        </Suspense>
        {start ? <CustomPointerLockControls pointerSpeed={0.5} ref={camera} /> : <PerspectiveCamera />}

        <Plane />
        <RenderTargets score={score} setScore={setScore} start={start} setStart={setStart} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 0, 3]} intensity={0.5} castShadow />
        <pointLight position={[0, 0, -3]} intensity={0.6} castShadow />
        <pointLight position={[0, 0, 4]} intensity={0.6} castShadow />
      </Canvas>
    </>
  )
}

export default App
