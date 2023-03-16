import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
//import { Mesh, Line, PointLight, PerspectiveCamera, LinearEncoding, MeshToonMaterial, NearestFilter, Vector3, BufferGeometry } from 'three'
import * as THREE from 'three'
import { OrbitControls, Stars, Float, useTexture } from '@react-three/drei'
import { PointsMaterial } from 'three'

function Planet1() {
  const ref = useRef<THREE.Points>(null!);

  useFrame(() => {
    ref.current.rotateY(1);
  })

  return (
    <points ref={ref} position={[-2, 0, 1]}>
      <sphereGeometry args={[0.3, 25, 25]} />
      <pointsMaterial color='white' size={0.005} />
    </points>
  )
}

function CentrePlanet() {
  const ref = useRef<THREE.Mesh>(null!);
  const textures = useTexture({
    map: './textures/planet/planet_color.png',
    //displacementMap: './textures/planet/planet_height.jpg',
    aoMap: './textures/planet/planet_ao.jpg',
    roughnessMap: './textures/planet/planet_roughness.jpg',
    metalnessMap: './textures/planet/planet_metalness.png',
    normalMap: './textures/planet/planet_normal.jpg'
  })

  const threeTone = useTexture('gradientMaps/threeTone.jpg')
  threeTone.minFilter = THREE.NearestFilter
  threeTone.magFilter = THREE.NearestFilter

  const fourTone = useTexture('gradientMaps/fourTone.jpg')
  fourTone.minFilter = THREE.NearestFilter
  fourTone.magFilter = THREE.NearestFilter

  const fiveTone = useTexture('gradientMaps/fiveTone.jpg')
  fiveTone.minFilter = THREE.NearestFilter
  fiveTone.magFilter = THREE.NearestFilter

  const customTone = useTexture('gradientMaps/custom.png')
  customTone.minFilter = THREE.NearestFilter
  customTone.magFilter = THREE.NearestFilter

  useFrame(() => {
    
  })

  return (
    <mesh ref={ref} position={[1.4, -0.5 ,0]}>
      <sphereGeometry args={[1.3, 100, 100]} />
      {/* <meshStandardMaterial color='gray' /> */}
      {/* <meshStandardMaterial {...textures} normalMap-encoding={LinearEncoding} /> */}
      <meshToonMaterial color='gray' gradientMap={customTone}/>
    </mesh>
  )
}

function CursorLight() {
  const ref = useRef<THREE.PointLight>(null!);

  useFrame(() => {
    
  })

  return (
    <pointLight ref={ref} position={[-10, 5, 5]} intensity={1} />
  )
}

function CameraHelper() {
    const camera = new THREE.PerspectiveCamera(60, 1, 0, 350);
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
      near: 0.1, 
      far:350
    }}>
      

        <ambientLight intensity={0.5}/>
        {/* <pointLight position={[5, 5, 5]} intensity={5} /> */}
        <CursorLight />
        <Stars />

        <Planet1 />
        <Float speed={0.1} rotationIntensity={1.0} floatIntensity={0.1}>
          <CentrePlanet />
        </Float>

        {/* <OrbitControls /> */}
        {/* <CameraHelper /> */}
        {/* <axesHelper args={[10]} /> */}
      
    </Canvas>
  )
}

export default Scene
