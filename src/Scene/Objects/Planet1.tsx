import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { GhibliShader } from '../../shaders/GhibliShader'

import * as manager from '../../ScrollManager'

const pos: number[] = [-1, 0, -2];
const radius: number = 4.15;
const id: number = 1;

let degrees: number;

function Dots() {
  const ref = useRef<THREE.Points>(null!);

  useFrame(() => {
    ref.current.rotateY(0.0002)
  })

  return (
    <points ref={ref} >
      <icosahedronGeometry args={[0.2, 5]} />
      <pointsMaterial color='white' size={0.01} />
    </points>
  )
}

function Planet() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    
  })

  return (
    <mesh ref={ref} >
      <sphereGeometry args={[0.23, 30, 30]} />
      <meshStandardMaterial color={'#080917'} side={THREE.BackSide} />
    </mesh>
  )
}

function Collection() {
  const ref = useRef<THREE.Group>(null!);

  useFrame(() => {
    degrees = manager.getPosition(id)
    ref.current.position.set(pos[0] + radius * Math.sin(manager.deg(degrees)), pos[1], pos[2] + radius * Math.cos(manager.deg(degrees)));
  })

  return (
    <group ref={ref} >
      <Planet />
      <Dots />
    </group>
  )
}
export default Collection;