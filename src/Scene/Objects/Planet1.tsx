import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

import * as manager from '../../ScrollManager'

const pos: number[] = [-1, 0 , -2];
const radius: number = 4.15;
const id: number = 1;

let degrees: number = 0;

function Dots() {
  const ref = useRef<THREE.Points>(null!);

  useFrame(() => {
    
    // degrees += 0.1
    // if (degrees > 360) {
    //   degrees -= 360
    // }
    degrees = manager.getPosition(id)

    ref.current.position.set(pos[0] + radius * Math.sin(manager.deg(degrees)), pos[1], pos[2] + radius * Math.cos(manager.deg(degrees)));
    ref.current.rotateY(0.0002)
  })

  return (
    <points ref={ref} position={[0, 0, 0]} >
      <icosahedronGeometry args={[0.2, 5]} />
      <pointsMaterial color='white' size={0.01} />
    </points>
  )
}

function Planet() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    degrees = manager.getPosition(id)
    ref.current.position.set(pos[0] + radius * Math.sin(manager.deg(degrees)), pos[1], pos[2] + radius * Math.cos(manager.deg(degrees)));
  })

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[0.23, 50, 50]} />
      <meshStandardMaterial color={'#080917'} side={THREE.BackSide} />
    </mesh>
  )
}

// function Light() {
//   const ref = useRef<THREE.PointLight>(null!);

//   useFrame(() => {
//     degrees = manager.getPosition(id)
//     ref.current.position.set(pos[0] + radius * Math.sin(manager.deg(degrees)), pos[1], pos[2] + radius * Math.cos(manager.deg(degrees)));
//   })

//   return (
//     <pointLight ref={ref} position={[0, 0, 0]} intensity={0.1} />
//   )
// }

function Collection() {
  return (
    <>
      <Planet />
      <Dots />
      {/* <Light /> */}
    </>
  )
}
export default Collection;