import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

import ufoScene from '../assets/3d/ufo2.glb';

const Ufo = () => {
    const ufoRef = useRef<THREE.Mesh>(null!);
    const { scene, animations } = useGLTF(ufoScene);
    const { actions } = useAnimations(animations, ufoRef);

    useEffect(() => {
        actions['Floating in Space']?.play();
    }, [actions]);

    useFrame(({ clock, camera }) => {
      ufoRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
        if (ufoRef.current.position.x > camera.position.x + 15) {
          ufoRef.current.rotation.y = Math.PI
        } else if (ufoRef.current.position.x < camera.position.x - 15) {
          ufoRef.current.rotation.y = 0;
        }
        if (ufoRef.current.rotation.y === 0) {
          ufoRef.current.position.x += 0.01;
          ufoRef.current.position.z -= 0.01;
        } else {
          ufoRef.current.position.x -= 0.01;
          ufoRef.current.position.z += 0.01;
        }
      });

    return (
        <mesh
          ref={ufoRef}
          position={[-20, 24, -5]}
        >
          <primitive object={scene} />
        </mesh>
    );
};

export default Ufo;