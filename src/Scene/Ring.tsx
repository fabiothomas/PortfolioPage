import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

import * as manager from '../ScrollManager'

const offsetFix: number = manager.deg(90);
let degrees: number;
const quality: number = 130;

function Section1() {
  const start: number = 0;
  const offset: number = 6;
  const length: number = 45;

  return (
    <mesh rotation={[manager.deg(0), manager.deg(0), manager.deg(start + offset), 'XYZ']}>
      <torusGeometry args={[4.15, 0.005, 5, quality / 360 * length, manager.deg(length - 2 * offset)]} />
      <meshToonMaterial color={'#8d8d8d'} side={THREE.DoubleSide} />
    </mesh>
  )
}

function Section2() {
  const start: number = 45;
  const offset: number = 6;
  const length: number = 90;

  return (
    <mesh rotation={[manager.deg(0), manager.deg(0), manager.deg( start + offset), 'XYZ']}>
      <torusGeometry args={[4.15, 0.005, 5, quality / 360 * length, manager.deg(length - 2 * offset)]} />
      <meshToonMaterial color={'#8d8d8d'} side={THREE.DoubleSide} />
    </mesh>
  )
}

function Section3() {
  const start: number = 135;
  const offset: number = 6;
  const length: number = 225;

  return (
    <mesh rotation={[manager.deg(0), manager.deg(0), manager.deg( start + offset), 'XYZ']}>
      <torusGeometry args={[4.15, 0.005, 5, quality / 360 * length, manager.deg(length - 2 * offset)]} />
      <meshToonMaterial color={'#8d8d8d'} side={THREE.DoubleSide} />
    </mesh>
  )
}

function Ring() {
  const ref = useRef<THREE.Group>(null!);

  useFrame(() => {
    degrees = manager.getPosition(1)
    ref.current.rotation.set(manager.deg(90), 0, -(manager.deg(degrees)) + offsetFix, 'XYZ')
  })

  return (
    <group ref={ref} position={[-1, 0, -2]} rotation={[manager.deg(90), manager.deg(0), offsetFix, 'XYZ']}>
      <Section1 />
      <Section2 />
      <Section3 />
    </group>
  )
}

export default Ring;