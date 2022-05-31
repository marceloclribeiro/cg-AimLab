import Target from "../Target";
import { useEffect, useState } from "react";

function RenderTargets() {
  const [targets, setTargets] = useState([{ position: [0, 0, 0] }]);
  const [score, setScore] = useState(0);

  const random = () => (Math.random() - 0.5) * 10;
  useEffect(() => {
    setInterval(() => {
      setTargets([{ position: [random(), random(), random()] }]);
      setTimeout(() => {
        setTargets([]);
      }, 2000);
    }, 3000);
  }, []);

  function handleRemove(id) {
    setTargets([]);
  }
  return (
    <>
      {targets?.map((target, index) => (
        <Target
          key={index}
          position={target.position}
          clickFunction={() => {
            handleRemove(index);
            setScore((prev) => prev + 1);
            console.log(score);
          }}
        />
      ))}
    </>
  );
}

export default RenderTargets;
