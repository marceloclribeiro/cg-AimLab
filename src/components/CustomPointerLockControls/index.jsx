// import { useThree } from "@react-three/fiber";

// import { Euler, EventDispatcher, Vector3 } from "three";

// function CustomPointerLockControls() {
//   const camera = useThree((state) => state.camera);
//   const euler = camera.rotation;
//   const domElement = document.body;
//   var isLocked = false;
//   function onMouseMove(event) {
//     domElement.requestPointerLock();

//     console.log(event);
//     // if (scope.isLocked === false) return;

//     const movementX =
//       event.movementX || event.mozMovementX || event.webkitMovementX || 0;
//     const movementY =
//       event.movementY || event.mozMovementY || event.webkitMovementY || 0;

//     euler.y -= movementX * 0.002 * 0.3;
//     euler.x -= movementY * 0.002 * 0.3;

//     camera.quaternion.setFromEuler(euler);
//   }
//   function onPointerlockChange() {
//     if (domElement.ownerDocument.pointerLockElement === domElement) {
//       // scope.dispatchEvent( _lockEvent );

//       isLocked = true;
//     } else {
//       // scope.dispatchEvent( _unlockEvent );

//       isLocked = false;
//     }
//   }

//   domElement.addEventListener("mousemove", onMouseMove);
//   domElement.ownerDocument.addEventListener(
//     "pointerlockchange",
//     onPointerlockChange
//   );
//   return <></>;
// }
// export {CustomPointerLockControls};
