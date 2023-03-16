import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { MeshStandardMaterial } from 'three';

function Planet1() {
  const ref = useRef<THREE.Points>(null!);

  useFrame(() => {
    ref.current.rotateY(0.005);
  })

  return (
    <points ref={ref} position={[-2, 0, 1]} >
      <icosahedronGeometry args={[0.3, 7]} />
      <pointsMaterial color='white' size={0.01} />
    </points>
  )
}

function Collection() {
  return (
    <>
      <Planet1 />
    </>
  )
}
export default Collection;