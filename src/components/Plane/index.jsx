import React from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

function Plane() {
  const props = useTexture({
    map: 'textures/Tiles107_1K_Color.jpg',
    displacementMap: 'textures/Tiles107_1K_Displacement.jpg',
    normalMap: 'textures/Tiles107_1K_NormalGL.jpg',
    roughnessMap: 'textures/Tiles107_1K_Roughness.jpg',
    aoMap: 'textures/Tiles107_1K_AmbientOcclusion.jpg',
  })

  props.map.wrapS = props.map.wrapT = THREE.RepeatWrapping

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -15, 0]} receiveShadow={true}>
        <planeBufferGeometry args={[100, 100]} />
        <meshPhongMaterial
          color={'dimgray'}
          receiveShadow
          // {...props}
          map={props.map}
          map-repeat={[10, 10]}
          displacementScale={0}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 50, 0]} receiveShadow={true}>
        <planeBufferGeometry args={[100, 100]} />
        <meshPhongMaterial
          color={'dimgray'}
          receiveShadow
          // {...props}
          map={props.map}
          map-repeat={[10, 10]}
          displacementScale={0}
        />
      </mesh>
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[50, 0, 0]} receiveShadow={true}>
        <planeBufferGeometry args={[100, 100]} />
        <meshPhongMaterial
          color={'dimgray'}
          receiveShadow
          // {...props}
          map={props.map}
          map-repeat={[10, 10]}
          displacementScale={0}
        />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]} position={[-50, 0, 0]} receiveShadow={true}>
        <planeBufferGeometry args={[100, 100]} />
        <meshPhongMaterial
          color={'dimgray'}
          receiveShadow
          // {...props}
          map={props.map}
          map-repeat={[10, 10]}
          displacementScale={0}
        />
      </mesh>
      <mesh rotation={[0, 0, 0]} position={[0, 0, -50]} receiveShadow={true}>
        <planeBufferGeometry args={[100, 100]} />
        <meshPhongMaterial
          color={'dimgray'}
          receiveShadow
          // {...props}
          map={props.map}
          map-repeat={[10, 10]}
          displacementScale={0}
        />
      </mesh>
      <mesh rotation={[0, -Math.PI, 0]} position={[0, 0, 50]} receiveShadow={true}>
        <planeBufferGeometry args={[100, 100]} />
        <meshPhongMaterial
          color={'dimgray'}
          receiveShadow
          // {...props}
          map={props.map}
          map-repeat={[10, 10]}
          displacementScale={0}
        />
      </mesh>
    </>
  )
}
export { Plane }
