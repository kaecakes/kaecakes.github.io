import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import ConstructionRobot from "../models/ConstructionRobot";
import Loader from "./Loader";

const Construction = () => {
  return (
    <>
        <Canvas
            className="h-full my-14"
            camera={{
                position: [0, 0, 8],
            }}
        >
        <directionalLight position={[0, 0, 1]} intensity={2.5} />
        <ambientLight intensity={1} />
        <Suspense fallback={<Loader />}>
            <ConstructionRobot />
        </Suspense>
        </Canvas>
        <p className="w-full text-center">
            This page is currently under construction.
            <br />
            Check back soon!
        </p>        
    </>
  )
}

export default Construction