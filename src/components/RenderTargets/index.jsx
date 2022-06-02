import Target from "../Target";
import { useEffect, useState } from "react";

function RenderTargets({ controller, score }) {
  const random = () => (Math.random() - 0.5) * 10;
  const [targets, setTargets] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setTargets([
        { position: [random(), random(), -10 - Math.abs(random())] },
      ]);
      setTimeout(() => {
        setTargets([]);
        console.log("setTimeout");
      }, 2000);
    }, 3000);
  }, []);

  function handleRemove() {
    setTargets([]);
    console.log("handleRemove");
  }
  return (
    <>
      {targets?.map((target, index) => (
        <Target
          key={index}
          position={target.position}
          clickFunction={() => {
            handleRemove();
            controller((prev) => prev + 1);
          }}
        />
      ))}
    </>
  );
}

export { RenderTargets };
