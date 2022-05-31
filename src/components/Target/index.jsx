import { useTexture } from "@react-three/drei";

function Target({ position, clickFunction }) {
  const props = useTexture({
    map: "textures/Tiles107_1K_Color.jpg",
    displacementMap: "textures/Tiles107_1K_Displacement.jpg",
    normalMap: "textures/Tiles107_1K_NormalGL.jpg",
    roughnessMap: "textures/Tiles107_1K_Roughness.jpg",
    aoMap: "textures/Tiles107_1K_AmbientOcclusion.jpg",
  });

  return (
    <mesh position={position} onClick={clickFunction}>
      <sphereBufferGeometry attach="geometry" args={[1, 100, 100]} />
      <meshStandardMaterial
        attach="material"
        {...props}
        displacementScale={0.05}
        color="lightBlue"
      />
    </mesh>
  );
}
export default Target;
