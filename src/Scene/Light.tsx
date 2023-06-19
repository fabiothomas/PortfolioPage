import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture, Float } from '@react-three/drei'

function Light() {
  const ref = useRef<THREE.PointLight>(null!);

  useFrame(() => {
    
  })

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
      <pointLight ref={ref} position={[10, -5, -5]} intensity={1} />
    </Float>
  )
}

export default Light;