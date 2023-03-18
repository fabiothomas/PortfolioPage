import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { MeshDistortMaterial, useTexture } from '@react-three/drei'

import * as manager from '../../ScrollManager'

const pos: number[] = [-1, 0 , -2];
const radius: number = 4.15;
const id: number = 3;

let degrees: number;

function Planet() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    
    // degrees += 0.1
    // if (degrees > 360) {
    //   degrees -= 360
    // }
    degrees = manager.getPosition(id)

    ref.current.rotation.set(0, manager.deg(degrees + 90), 0);
    ref.current.position.set(pos[0] + radius * Math.sin(manager.deg(degrees)), pos[1], pos[2] + radius * Math.cos(manager.deg(degrees)));
  })

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <torusGeometry args={[0.2, 0.05]} />
      {/* <meshStandardMaterial color={'blue'} /> */}
      <MeshDistortMaterial distort={1} speed={1} color={'blue'} />
    </mesh>
  )
}

function Collection() {
  return (
    <>
      <Planet />
    </>
  )
}
export default Collection;