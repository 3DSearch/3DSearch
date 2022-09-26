// @ts-nocheck
// cannon
import * as CANNON from "cannon";
// context
import { useCannon } from "../context/useCannon";

export default function Plane({ position, bgColor }) {
  const { ref } = useCannon(
    { bodyProps: { mass: 0 } },
    (body: { addShape; position }) => {
      body.addShape(new CANNON.Plane());
      body.position.set(...position);
    }
  );
  return (
    <mesh ref={ref} receiveShadow position={position}>
      <planeBufferGeometry attach="geometry" args={[1000, 1000, 1000, 1000]} />
      <meshPhongMaterial attach="material" color={bgColor} />
    </mesh>
  );
}
