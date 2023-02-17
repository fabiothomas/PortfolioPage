import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh, Light, PerspectiveCamera } from 'three'
import { OrbitControls, Stars } from '@react-three/drei'

function Planet() {
  const planetRef = useRef<Mesh>(null!);

  useFrame(() => {
    
  })

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[1, 100, 100]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  )
}

function CursorLight() {
  const cursorLightRef = useRef<Light>(null!);

  useFrame(() => {
    cursorLightRef.current.position.x += 0.005;
  })

  return (
    <pointLight />
  )
}

function CameraHelper() {
    const camera = new PerspectiveCamera(60, 1, 1, 350);
    return <group position={[2, 2, 2]} rotation={[-0.15*Math.PI, 0.25*Math.PI, 0*Math.PI]}>
        <cameraHelper args={[camera]} />
    </group>
}

function Scene() {

  return (
    <Canvas camera={{ 
      position: [2, 2, 2], 
      rotation: [-0.15*Math.PI, 0.25*Math.PI, 0*Math.PI], 
      fov: 60, 
      aspect: 1, 
      near: 1, 
      far:1000 
    }}>

      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={5} />
      <Planet />
      <Stars />

      <OrbitControls />
      <CameraHelper />
      <axesHelper args={[10]} />
    </Canvas>
  )
}

export default Scene
