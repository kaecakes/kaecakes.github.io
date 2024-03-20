import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';

import Loader from '../components/Loader';
import Popup from '../components/Popup';
import Portal from '../models/Portal';
import Sky from '../models/Sky';
import Space from '../models/Space';
// import Ufo from '../models/Ufo';
import User from '../models/User';

export type RotationDirection = 'right' | 'left'

const Home = () => {
  const [hoveringNav, setHoveringNav] = useState<string>('');
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [rotationDirection, setRotationDirection] = useState<RotationDirection>('right');
  const [, setCurrentStage] = useState<number>(1);
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (hoveringNav) navigate(hoveringNav);
  };

  return (
    <section className="w-full h-screen relative" onClick={handleClick}>
      {hoveringNav !== '' && <Popup hoveringNav={hoveringNav} />}

      <Canvas className={`w-full h-screen bg-transparent ${hoveringNav ? 'cursor-pointer' : isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
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
            setHoveringNav={setHoveringNav}
            setIsRotating={setIsRotating}
            setRotationDirection={setRotationDirection}
          />
          {hoveringNav && <Portal />}
          {/* <Ufo /> */}
          <User hoveringNav={hoveringNav} isRotating={isRotating} rotationDirection={rotationDirection} />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home