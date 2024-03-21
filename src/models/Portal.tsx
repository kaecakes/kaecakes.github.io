import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

import portalScene from '../assets/3d/portal.glb';

const Portal = () => {
  const scale = [6, 25, 8]
  const rotation = [0, 0, 0]
  const position = [0, -12, -34]
  const portalRef = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF(portalScene);
  const { actions } = useAnimations(animations, portalRef);

  useEffect(() => {
    actions['PortalAction']?.play();
  }, [actions]);

  useFrame(({ clock }) => {
    const timeDelta = Math.sin(clock.elapsedTime) * 0.2 + 2;
    if (Math.floor(timeDelta) === 1) portalRef.current.rotateX(0.001)
    else portalRef.current.rotateX(-0.001)
  });

  return (
    <mesh
      ref={portalRef}
      scale={new THREE.Vector3(...scale)}
      rotation={new THREE.Euler(...rotation)}
      position={new THREE.Vector3(...position)}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Portal;