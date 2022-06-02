import Target from "../Target";
import { useEffect, useState } from "react";

function RenderTargets({ controller, score }) {
  const random = () => (Math.random() - 0.5) * 10;
  const [targets, setTargets] = useState([]);

  useEffect(() => {
    // setInterval(() => {
    setTimeout(() => {
      setTargets([
        { position: [random(), random(), -10 - Math.abs(random())] },
      ]);
      // setTargets([]);
      console.log("setTimeout");
    }, 2000);
    clearTimeout();

    // console.log("setInterval");
    // }, 3000);
  }, [targets]);

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
