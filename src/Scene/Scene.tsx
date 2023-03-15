import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLayoutEffect, useRef, Suspense } from 'react'
//import { Mesh, Line, PointLight, PerspectiveCamera, LinearEncoding, MeshToonMaterial, NearestFilter, Vector3, BufferGeometry } from 'three'
import * as THREE from 'three'
import { OrbitControls, Stars, Float, useTexture } from '@react-three/drei'

// function Orbit() {
//   const ref = useRef()

//   const points: THREE.Vector3[] = []
//   points.push(new THREE.Vector3(-10, 0, 0))
//   points.push(new THREE.Vector3(0, 10, 0))
//   points.push(new THREE.Vector3(10, 0, 0))
//   points.push(new THREE.Vector3(-1, 9, 0))
  
//   return (
//     <line ref={ref}>
//       <bufferGeometry setFromPoints={() => new THREE.BufferGeometry().setFromPoints(points)}/>
//       <lineBasicMaterial color={'green'}/>
//     </line>
//   )
// }

// function Line() {
//   const ref = useRef<THREE.Line>()

//   const points: THREE.Vector3[] = []
//   points.push(new THREE.Vector3(-10, 0, 0))
//   points.push(new THREE.Vector3(0, 10, 0))
//   points.push(new THREE.Vector3(10, 0, 0))
//   points.push(new THREE.Vector3(-1, 9, 0))

//   useFrame(() => {
//     if(ref.current){
//         ref.current.geometry.setFromPoints(points.map((point) => new THREE.Vector3(...point)));
//     }
//   })

//   return (
//     <line ref={ref}>
//       <bufferGeometry />
//       <lineBasicMaterial color="hotpink" />
//     </line>
//   )
// }

function Planet() {
  const planetRef = useRef<THREE.Mesh>(null!);
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

  useFrame(() => {
    
  })

  return (
    <mesh ref={planetRef} position={[1.2, -0.5 ,0]}>
      <sphereGeometry args={[1.3, 100, 100]} />
      {/* <meshStandardMaterial color='gray' /> */}
      {/* <meshStandardMaterial {...textures} normalMap-encoding={LinearEncoding} /> */}
      <meshToonMaterial color='gray' gradientMap={fiveTone}/>
    </mesh>
  )
}

function CursorLight() {
  const cursorLightRef = useRef<THREE.PointLight>(null!);

  useFrame(() => {
    
  })

  return (
    <pointLight ref={cursorLightRef} position={[-10, 5, 5]} intensity={1} />
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

        
        <Float speed={0.1} rotationIntensity={1.0} floatIntensity={0.1}>
          <Planet />
        </Float>

        {/* <OrbitControls /> */}
        {/* <CameraHelper /> */}
        {/* <axesHelper args={[10]} /> */}
      
    </Canvas>
  )
}

export default Scene
