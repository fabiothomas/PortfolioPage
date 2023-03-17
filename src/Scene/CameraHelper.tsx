import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

import * as manager from '../ScrollManager'

function CameraHelper() {
  const camera = new THREE.PerspectiveCamera(60, 1, 0, 350);
  return <group position={[2, 1, 2]} rotation={[manager.deg(-19.5), manager.deg(45), manager.deg(0), 'YXZ']}>
      <cameraHelper args={[camera]} />
  </group>
}

export default CameraHelper;