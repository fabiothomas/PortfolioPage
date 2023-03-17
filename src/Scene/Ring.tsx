import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

import * as manager from '../ScrollManager'

function Ring() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {

  })

  return (
    <mesh ref={ref} position={[-1, 0, -2]} rotation={[manager.deg(90), manager.deg(0), manager.deg(0), 'XYZ']}>
      <torusGeometry args={[4.15, 0.005, 16, 200]} />
      <meshToonMaterial color={'#8d8d8d'} />
    </mesh>
  )
}

export default Ring;