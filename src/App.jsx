import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import RenderTargets from "./components/RenderTargets";

function App() {
  return (
    <Canvas>
      <RenderTargets />
      <ambientLight intensity={0.5} />
      <OrbitControls />
      <Stars />
      <spotLight position={[10, 15, 10]} angle={0.5} />
    </Canvas>
  );
}

export default App;
