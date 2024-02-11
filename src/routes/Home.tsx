import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import * as THREE from 'three';

// import Ufo from '../models/Ufo';
import Loader from '../components/Loader';
import User from '../models/User';
import Sky from '../models/Sky';
import Space from '../models/Space';

{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  POPUP
</div> */}

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [, setCurrentStage] = useState(1);

  return (
    <section className="w-full h-screen relative">
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          {/* Lighting */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.9} />
          <hemisphereLight color={new THREE.Color(0xFFFFFF)} groundColor={new THREE.Color(0xFFFFFF)} intensity={1} />
          
          {/* 3D Objects */}
          {/* <Ufo /> */}
          <Sky isRotating={isRotating} />
          <Space
            isRotating={isRotating}
            setCurrentStage={setCurrentStage}
            setIsRotating={setIsRotating}
          />
          <User isRotating={isRotating} />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home