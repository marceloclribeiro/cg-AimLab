import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls, PositionalAudio } from "@react-three/drei";

import "./App.css";
import {
  Crosshair,
  // CustomPointerLockControls,
  Plane,
  RenderTargets,
  // TestCamera,
} from "./components";

function App() {
  const [score, setScore] = useState(0);
  const [clicks, setClicks] = useState(0);

  const sound = useRef();
  const camera = useRef();

  return (
    <>
      <div className="infos">
        {/* <h1>Score:{score}</h1> */}
        {/* <h1>Clicks:{clicks}</h1> */}
        <h1>Precision:{Math.round((score / clicks) * 1000) / 10}%</h1>
      </div>
      <Crosshair />
      <Canvas
        onClick={() => {
          setClicks((prev) => prev + 1);
          sound.current.play();
          sound.current.setLoop(false);
        }}
      >
        <Suspense>
          <PositionalAudio
            url={"./sounds/gun3.mp3"}
            ref={sound}
            position={[0, 0, 5]}
          />
        </Suspense>
        <PointerLockControls ref={camera} />
        <Plane />
        <RenderTargets controller={setScore} score={score} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 0, 3]} intensity={0.5} castShadow />
        <pointLight position={[0, 0, -3]} intensity={0.6} castShadow />
        <pointLight position={[0, 0, 4]} intensity={0.6} castShadow />
      </Canvas>
    </>
  );
}

export default App;
