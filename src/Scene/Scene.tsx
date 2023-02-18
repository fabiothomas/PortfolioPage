import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh, PointLight, PerspectiveCamera, LinearEncoding, MeshToonMaterial } from 'three'
import { OrbitControls, Stars, Float, useTexture } from '@react-three/drei'

function Planet() {
  const planetRef = useRef<Mesh>(null!);
  const textures = useTexture({
    map: './textures/planet/planet_color.png',
    //displacementMap: './textures/planet/planet_height.png',
    aoMap: './textures/planet/planet_ao.png',
    roughnessMap: './textures/planet/planet_roughness.png',
    metalnessMap: './textures/planet/planet_metalness.png',
    normalMap: './textures/planet/planet_normal.png'
  })

  useFrame(() => {
    
  })

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[1, 100, 100]} />
      <meshStandardMaterial color='gray' />
      {/* <meshStandardMaterial {...textures} normalMap-encoding={LinearEncoding} /> */}
      {/* <meshToonMaterial color='gray' /> */}
    </mesh>
  )
}

function CursorLight() {
  const cursorLightRef = useRef<PointLight>(null!);

  useFrame(() => {
    
  })

  return (
    <pointLight ref={cursorLightRef} position={[-10, 5, 5]} intensity={5} />
  )
}

function CameraHelper() {
    const camera = new PerspectiveCamera(60, 1, 1, 350);
    return <group position={[2, 2, 2]} rotation={[-0.15*Math.PI, 0.25*Math.PI, 0*Math.PI, 'YXZ']}>
        <cameraHelper args={[camera]} />
    </group>
}

const deg = (degrees: number) => degrees * (Math.PI / 180)

function Scene() {

  return (
    <Canvas camera={{ 
      position: [2, 2, 2], 
      rotation: [-0.15*Math.PI, 0.25*Math.PI, 0*Math.PI, 'YXZ'], 
      fov: 60, 
      aspect: 1, 
      near: 1, 
      far:350
    }}>

      <ambientLight />
      {/* <pointLight position={[5, 5, 5]} intensity={5} /> */}
      <CursorLight />
      <Stars />

      <Float speed={1.0} rotationIntensity={1.0} floatIntensity={1.0}>
        <Planet />
      </Float>

      {/* <OrbitControls /> */}
      <CameraHelper />
      <axesHelper args={[10]} />
    </Canvas>
  )
}

export default Scene
