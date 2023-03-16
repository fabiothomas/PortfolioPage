import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

const deg = (degrees: number) => degrees * (Math.PI / 180)

function CameraHelper() {
  const camera = new THREE.PerspectiveCamera(60, 1, 0, 350);
  return <group position={[2, 1, 2]} rotation={[deg(-19.5), deg(45), deg(0), 'YXZ']}>
      <cameraHelper args={[camera]} />
  </group>
}

export default CameraHelper;