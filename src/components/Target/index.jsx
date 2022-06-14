import { useEffect, useState } from 'react'

function Target({ position: initialPosition, clickFunction, move, movements }) {
  const [position, setPosition] = useState(initialPosition)

  const random = () => Math.round(Math.random() * movements) //1 movimenta só X, 5 movimenta todos eixos
  var movement = []

  useEffect(() => {
    switch (random()) {
      case 0:
        movement = [-0.05, 0, 0]
        break
      case 1:
        movement = [0.05, 0, 0]
        break
      case 2:
        movement = [0, -0.05, 0]
        break
      case 3:
        movement = [0, 0.05, 0]
        break
      case 4:
        movement = [0, 0, -0.05]
        break
      case 5:
        movement = [0, 0, 0.05]
        break
    }

    const addMovement = () => {
      setInterval(() => {
        setPosition((prev) => [prev[0] + movement[0], prev[1] + movement[1], prev[2] + movement[2]])
      }, 10)
    }
    move && addMovement()
  }, [])
  return (
    <mesh position={position} onClick={clickFunction}>
      <sphereBufferGeometry attach="geometry" args={[0.5, 100, 100]} />
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  )
}
export default Target
