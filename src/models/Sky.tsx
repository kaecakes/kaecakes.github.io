import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, Vector3 } from 'three';

import skyScene from '../assets/3d/stars.glb';

const Sky = ({ isRotating }: { isRotating: boolean }) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef<Mesh>(null!);

    useFrame((_, delta) => {
        let rotationIntensity = 0;
        if (isRotating) rotationIntensity = 0.15;
        else rotationIntensity = 0.05;
        skyRef.current.rotation.y += rotationIntensity * delta;
    })

    return (
        <mesh
            ref={skyRef}
            position={new Vector3(0, 3, 0)}
            scale={new Vector3(0.05, 0.05, 0.05)}
        >
            <primitive object={sky.scene} />
        </mesh>
    );
}

export default Sky;