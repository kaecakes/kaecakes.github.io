import { useAnimations, useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

import robotScene from '../assets/3d/broken-robot.glb';

const ConstructionRobot = () => {
    const robotRef = useRef<THREE.Mesh>(null!);
    const { scene, animations } = useGLTF(robotScene);
    const { actions } = useAnimations(animations, robotRef);

    useEffect(() => {
        actions['Animation']?.play();
    }, [actions]);

    return (
      <mesh
        ref={robotRef}
        position={[0, 0, 0]}
      >
        <primitive object={scene} />
      </mesh>
    );
};

export default ConstructionRobot;
