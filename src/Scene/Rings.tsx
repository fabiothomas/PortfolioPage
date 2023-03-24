import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

import * as manager from '../ScrollManager'

const quality: number = 130;

function Ring1() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {

  })

  return (
    <mesh ref={ref} rotation={[manager.deg(90), manager.deg(0), manager.deg(0), 'XYZ']}>
      <torusGeometry args={[5, 0.005, 5, quality]} />
      <meshToonMaterial color={'#8d8d8d'} side={THREE.DoubleSide} />
    </mesh>
  )
}

function Ring2() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {

  })

  return (
    <mesh ref={ref} rotation={[manager.deg(90), manager.deg(0), manager.deg(0), 'XYZ']}>
      <torusGeometry args={[5.2, 0.005, 5, quality]} />
      <meshToonMaterial color={'#8d8d8d'} side={THREE.DoubleSide} />
    </mesh>
  )
}

function Ring3() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {

  })

  return (
    <mesh ref={ref} rotation={[manager.deg(90), manager.deg(0), manager.deg(0), 'XYZ']}>
      <torusGeometry args={[5.4, 0.005, 5, quality]} />
      <meshToonMaterial color={'#8d8d8d'} side={THREE.DoubleSide} />
    </mesh>
  )
}

function Collection() {
  const ref = useRef<THREE.Group>(null!);

  return (
    <group ref={ref} position={[-1, 0, -2]}>
      <Ring1 />
      <Ring2 />
      <Ring3 />
    </group>
  )
}

export default Collection;