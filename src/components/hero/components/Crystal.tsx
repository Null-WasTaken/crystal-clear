import Model3d from "./model.jsx";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export default function Crystal() {
    return (
        <>
          <ambientLight/>
        <OrbitControls enablePan={false} enableRotate={false} enableZoom={false}/>
        <Suspense fallback={null}>
        <Model3d/>
        </Suspense>
        <Environment preset="sunset"/></>
      
    );
}