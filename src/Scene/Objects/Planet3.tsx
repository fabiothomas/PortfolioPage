import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { MeshDistortMaterial, useTexture } from '@react-three/drei'

import * as manager from '../../ScrollManager'

const pos: number[] = [-1, 0, -2];
const radius: number = 4.15;
const id: number = 3;

let degrees: number;

function Planet() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    
  })

  return (
    <mesh ref={ref} >
      <torusGeometry args={[0.2, 0.05, 20, 30]} />
      <MeshDistortMaterial distort={1} speed={1} color={'#8d8d8d'} />
    </mesh>
  )
}

function Collection() {
  const ref = useRef<THREE.Group>(null!);

  useFrame(() => {
    degrees = manager.getPosition(id)
    ref.current.position.set(pos[0] + radius * Math.sin(manager.deg(degrees)), pos[1], pos[2] + radius * Math.cos(manager.deg(degrees)));
    ref.current.rotation.set(0, manager.deg(degrees + 90), 0);
  })

  return (
    <group ref={ref} >
      <Planet />
    </group>
  )
}
export default Collection;