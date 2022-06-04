import Target from '../Target'
import { useEffect, useState } from 'react'

function RenderTargets({ score, setScore, start, setStart }) {
  const random = () => (Math.random() - 0.5) * 10
  const [targets, setTargets] = useState([])
  const [myInterval, setMyInterval] = useState()

  //comentados são as linhas pra gerar automaticamente
  useEffect(() => {
    if (start) {
      // setMyInterval(
      // setInterval(() => {
      setTargets([{ position: [random(), random(), -10 - Math.abs(random())] }])
      // setTimeout(() => {
      // setTargets([])
      // }, 2000)
      // }, 3000)
      // )
    } else {
      // clearInterval(myInterval)
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
          clickFunction={() => {
            handleRemove()
            //comentado é como definir um numero maximo de score
            // if (score == 4) setStart((prev) => !prev)
            setScore((prev) => prev + 1)
          }}
        />
      ))}
    </>
  )
}

export { RenderTargets }
