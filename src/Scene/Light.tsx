import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

function Light() {
  const ref = useRef<THREE.PointLight>(null!);

  useFrame(() => {
    
  })

  return (
    <pointLight ref={ref} position={[-10, 5, 5]} intensity={1} />
  )
}

export default Light;