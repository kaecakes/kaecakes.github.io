import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import * as THREE from 'three';

import Loader from '../components/Loader';
import Portal from '../models/Portal';
import Sky from '../models/Sky';
import Space from '../models/Space';
import User from '../models/User';

{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  POPUP
</div> */}

export type RotationDirection = 'right' | 'left'

const Home = () => {
  const [hoveringObject, setHoveringObject] = useState<string>('');
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [rotationDirection, setRotationDirection] = useState<RotationDirection>('right');
  const [, setCurrentStage] = useState<number>(1);

  return (
    <section className="w-full h-screen relative">
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          {/* Lighting */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.9} />
          <hemisphereLight color={new THREE.Color(0xFFFFFF)} groundColor={new THREE.Color(0xFFFFFF)} intensity={1} />
          
          {/* 3D Objects */}
          <Sky isRotating={isRotating} />
          <Space
            isRotating={isRotating}
            rotationDirection={rotationDirection}
            setCurrentStage={setCurrentStage}
            setHoveringObject={setHoveringObject}
            setIsRotating={setIsRotating}
            setRotationDirection={setRotationDirection}
          />''
          {hoveringObject && <Portal />}
          <User isRotating={isRotating} rotationDirection={rotationDirection} />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home