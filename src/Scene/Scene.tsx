import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh, PointLight, PerspectiveCamera, LinearEncoding, MeshToonMaterial } from 'three'
import { OrbitControls, Stars, Float, useTexture } from '@react-three/drei'

function Planet() {
  const planetRef = useRef<Mesh>(null!);
  const textures = useTexture({
    map: './textures/planet/planet_color.png',
    //displacementMap: './textures/planet/planet_height.jpg',
    aoMap: './textures/planet/planet_ao.jpg',
    roughnessMap: './textures/planet/planet_roughness.jpg',
    metalnessMap: './textures/planet/planet_metalness.png',
    normalMap: './textures/planet/planet_normal.jpg'
  })

  useFrame(() => {
    
  })

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[1, 100, 100]} />
      {/* <meshStandardMaterial color='gray' /> */}
      <meshStandardMaterial {...textures} normalMap-encoding={LinearEncoding} />
      {/* <meshToonMaterial color='gray' /> */}
    </mesh>
  )
}

function CursorLight() {
  const cursorLightRef = useRef<PointLight>(null!);

  useFrame(() => {
    
  })

  return (
    <pointLight ref={cursorLightRef} position={[-10, 5, 5]} intensity={3} />
  )
}

function CameraHelper() {
    const camera = new PerspectiveCamera(60, 1, 1, 350);
    return <group position={[2, 1, 2]} rotation={[deg(-19.5), deg(45), deg(0), 'YXZ']}>
        <cameraHelper args={[camera]} />
    </group>
}

const deg = (degrees: number) => degrees * (Math.PI / 180)

function Scene() {

  return (
    <Canvas camera={{ 
      position: [2, 1, 2], 
      rotation: [deg(-19.5), deg(45), deg(0), 'YXZ'], 
      fov: 60, 
      aspect: 1, 
      near: 1, 
      far:350
    }}>

      <ambientLight intensity={1.5}/>
      {/* <pointLight position={[5, 5, 5]} intensity={5} /> */}
      <CursorLight />
      <Stars />

      <Float speed={1.0} rotationIntensity={1.0} floatIntensity={1.0}>
        <Planet />
      </Float>

      <OrbitControls />
      <CameraHelper />
      <axesHelper args={[10]} />
    </Canvas>
  )
}

export default Scene
