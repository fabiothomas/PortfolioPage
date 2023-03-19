import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

import * as manager from '../ScrollManager'

const offsetFix: number = manager.deg(90);

const offset1: number = manager.deg(6);
const length1: number = manager.deg(18);
const offset2: number = manager.deg(36);
const length2: number = manager.deg(318);

let degrees: number;

function Section1() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    degrees = manager.getPosition(1)
    ref.current.rotation.set(manager.deg(90), 0, -(manager.deg(degrees)) + offsetFix + offset1, 'XYZ')
  })

  return (
    <mesh ref={ref} position={[-1, 0, -2]} rotation={[manager.deg(90), manager.deg(0), manager.deg(offsetFix + offset1), 'XYZ']}>
      <torusGeometry args={[4.15, 0.005, 16, 200, length1]} />
      <meshToonMaterial color={'#8d8d8d'} side={THREE.DoubleSide} />
    </mesh>
  )
}

function Section2() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    degrees = manager.getPosition(1)
    ref.current.rotation.set(manager.deg(90), 0, -(manager.deg(degrees)) + offsetFix + offset2, 'XYZ')
  })

  return (
    <mesh ref={ref} position={[-1, 0, -2]} rotation={[manager.deg(90), manager.deg(0), manager.deg(offsetFix + offset2), 'XYZ']}>
      <torusGeometry args={[4.15, 0.005, 16, 200, length2]} />
      <meshToonMaterial color={'#8d8d8d'} side={THREE.DoubleSide} />
    </mesh>
  )
}

function Ring() {
  return (
    <>
      <Section1 />
      <Section2 />
    </>
  )
}

export default Ring;