import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

function Audio({ clicks = false, path }) {
  const camera = useThree((state) => state.camera)

  const listener = new THREE.AudioListener()
  camera.add(listener)

  const sound = new THREE.Audio(listener)

  const audioLoader = new THREE.AudioLoader()

  useEffect(() => {
    audioLoader.load(path, function (buffer) {
      sound.setBuffer(buffer)
      sound.play()
    })
  }, [clicks])

  return <primitive object={sound} position={[0, 0, 5]} />
}
export { Audio }
