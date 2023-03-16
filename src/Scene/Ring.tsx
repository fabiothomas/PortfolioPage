import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

const deg = (degrees: number) => degrees * (Math.PI / 180)

function Ring() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {

  })

  return (
    <mesh ref={ref} position={[-1, 0, -2]} rotation={[deg(90), deg(0), deg(0), 'XYZ']}>
      <torusGeometry args={[4.15, 0.005, 16, 200]} />
      <meshToonMaterial color='gray' />
    </mesh>
  )
}

export default Ring;