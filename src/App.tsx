import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, About, Projects, Contact } from './routes';
import Navbar from './components/Navbar';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import * as THREE from 'three';

import Loader from './components/Loader';
import Sky from './models/Sky';

const App = () => {
  const location = useLocation();

  return (
    <main className="bg-black relative flex w-full h-screen overflow-hidden ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {location.pathname !== "/" && (
        <>
          <Navbar />
          <div className="absolute w-full h-full overflow-hidden inset-0">
            <Canvas className="static inset-0 bg-transparent z-0" camera={{ near: 0.1, far: 1000 }}>
              <Suspense fallback={<Loader />}>
                {/* Lighting */}
                <directionalLight position={[1, 1, 1]} intensity={2} />
                <ambientLight intensity={0.9} />
                <hemisphereLight color={new THREE.Color(0xFFFFFF)} groundColor={new THREE.Color(0xFFFFFF)} intensity={1} />
                {/* 3D Objects */}
                <Sky isRotating={true} />
              </Suspense>
            </Canvas>
          </div>
        </>
      )}
    </main>
  )
}

export default App;