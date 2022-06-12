import Target from '../Target'
import { useEffect, useState } from 'react'

function RenderTargets({ score, setScore, start, setStart, gamemode }) {
  const random = () => (Math.random() - 0.5) * 10
  const [targets, setTargets] = useState([])
  const [myInterval, setMyInterval] = useState()

  useEffect(() => {
    if (start && gamemode != 'steady') {
      console.log('nao steady')

      setMyInterval(
        setInterval(() => {
          setTargets([{ position: [random(), random(), -10 - Math.abs(random())] }])
          setTimeout(() => {
            setTargets([])
          }, 2000)
        }, 3000)
      )
    } else {
      clearInterval(myInterval)
    }
  }, [start])

  useEffect(() => {
    if (start && gamemode == 'steady') {
      console.log('steady')
      setTargets([{ position: [random(), random(), -10 - Math.abs(random())] }])
    }
  }, [start, score])

  function handleRemove() {
    setTargets([])
  }
  return (
    <>
      {targets?.map((target, index) => (
        <Target
          key={index}
          position={target.position}
          move={gamemode != 'steady'}
          movements={gamemode == 'horizontal' ? 1 : 5}
          clickFunction={() => {
            handleRemove()
            //comentado é como definir um numero maximo de score
            if (score == 4) {
              setStart((prev) => !prev)
            }
            setScore((prev) => prev + 1)
          }}
        />
      ))}
    </>
  )
}

export { RenderTargets }
