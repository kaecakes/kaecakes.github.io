import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { Euler, Vector3 } from 'three';

import userScene from '../assets/3d/stickman.glb';
import { RotationDirection } from '../routes/Home';

interface UserProps {
  hoveringNav: string;
  isRotating: boolean;
  rotationDirection: RotationDirection
}

const User = ({ hoveringNav, isRotating, rotationDirection }: UserProps) => {
  const userRef = useRef<THREE.Mesh>(null!);
  const { scene, animations }= useGLTF(userScene);
  const { actions } = useAnimations(animations, userRef);
  
  const adjustForScreenSize = () => {
    let scale, position;
    const rotation = [0, 20, 0];
    if (window.innerWidth < 768) {
      scale = [1, 1, 1];
      position = [0, -1.75, 0];
    } else {
      scale = [2, 2, 2];
      position = [0, -4, -4];
    }
    return [scale, position, rotation];
  }

  const [scale, position, rotation] = adjustForScreenSize();

  useEffect(() => {
    actions[isRotating && !hoveringNav ? 'Idle' : 'Run']?.stop();
    actions[isRotating && !hoveringNav ? 'Run' : 'Idle']?.play();
  }, [actions, hoveringNav, isRotating]);

  useEffect(() => {
    if (hoveringNav) userRef.current.rotateY(Math.PI / 2);
    else if (isRotating) userRef.current.rotateY(rotationDirection === 'left' ? 0 : Math.PI);
  }, [hoveringNav, isRotating, rotation, rotationDirection]);

  return (
    <mesh
      ref={userRef}
      position={new Vector3(...position)}
      rotation={new Euler(...rotation)}
      scale={new Vector3(...scale)}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default User;